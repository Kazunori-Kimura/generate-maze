
/**
 * 方向
 */
const Direction = {
  Yoko: 0,
  Tate: 1
};

/**
 * 部屋
 */
export class Room {
  constructor(index, x, y) {
    this.roomNo = index;
    this.clusterNo = index;
    this.position = [x, y];

    this.walls = {
      top: null,
      left: null,
      right: null,
      bottom: null
    };
  }

  html() {
    const borders = [];
    if (this.walls.top != null && !this.walls.top.isBroken) {
      borders.push("border-top");
    }
    if (this.walls.right != null && !this.walls.right.isBroken) {
      borders.push("border-right");
    }
    if (this.walls.bottom != null && !this.walls.bottom.isBroken) {
      borders.push("border-bottom");
    }
    if (this.walls.left != null && !this.walls.left.isBroken) {
      borders.push("border-left");
    }

    const html = [];
    if (this.position[0] === 0) {
      if (this.position[1] !== 0) {
        html.push(`</div>`);
      }
      html.push(`<div class="d-flex flex-nowrap">`);
    }
    html.push(`<div class="room ${borders.join(" ")}"></div>`);

    return html.join("");
  }
}

/**
 * 壁
 */
export class Wall {
  /**
   * 
   * @param {number} index 
   * @param {number} x1 
   * @param {number} y1 
   * @param {number} x2 
   * @param {number} y2 
   * @param {number} direction 
   * @param {boolean} breakable 
   */
  constructor(index, x1, y1, x2, y2, direction, breakable) {
    this.index = index;
    this.position = [[x1, y1], [x2, y2]];
    this.direction = direction;
    this.isBreakable = breakable;

    this.isBroken = false;
  }
}

/**
 * 迷路
 */
export class Maze {
  /**
   * 
   * @param {number} rows 
   * @param {number} cols 
   */
  constructor(rows, cols) {
    this.rooms = [];
    // key: x_y, value: Room
    this.roomMap = new Map();
    this.walls = [];

    // key: clusterNo, value: Room
    this.clusters = new Map();

    let roomIndex = 0;
    let wallIndex = 0;

    for (let y=0; y<rows; y++) {
      for (let x=0; x<cols; x++) {
        const room = new Room(roomIndex, x, y);
        this.rooms.push(room);
        this.roomMap.set(`${x}_${y}`, room);
        const set = new Set();
        set.add(roomIndex);
        this.clusters.set(roomIndex, set);
        roomIndex++;

        if (y === 0) {
          // 上端なら上Wallを作成
          const topWall = new Wall(wallIndex, x, y, x+1, y, Direction.Yoko, false);
          wallIndex++;
          this.walls.push(topWall);
          room.walls.top = topWall;
        }
        if (x === cols - 1) {
          // 右端なら右Wallを作成
          const rightWall = new Wall(wallIndex, x+1, y, x+1, y+1, Direction.Tate, false);
          wallIndex++;
          this.walls.push(rightWall);
          room.walls.right = rightWall;
        }

        // 左Wall
        const leftWall = new Wall(wallIndex, x, y, x, y+1, Direction.Tate, x !== 0);
        wallIndex++;
        this.walls.push(leftWall);
        room.walls.left = leftWall;

        // 下Wall
        const bottomWall = new Wall(wallIndex, x, y+1, x+1, y+1, Direction.Yoko,  y !== (rows - 1));
        wallIndex++;
        this.walls.push(bottomWall);
        room.walls.bottom = bottomWall;
      }
    }
  }

  /**
   * 壁の配列をシャッフルする
   * 
   * @param {Array<Wall>} arr 
   */
  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const index = Math.floor(Math.random() * (i + 1));
      const item = arr[i];
      arr[i] = arr[index];
      arr[index] = item;
    }

    return arr;
  }

  /**
   * 隣接する部屋を取得する
   * 
   * @param {Wall} wall 
   * @returns {Array<Room>}
   */
  getAdjacentRooms(wall) {
    const adjacentRooms = [];
    const pos = wall.position[0];
    if (wall.direction === Direction.Tate) {
      // 壁が縦方向の場合
      adjacentRooms.push(this.roomMap.get(`${pos[0]}_${pos[1]}`));
      if (pos[0] !== 0) {
        adjacentRooms.push(this.roomMap.get(`${pos[0] - 1}_${pos[1]}`));
      }
    } else {
      // 壁が横方向の場合
      adjacentRooms.push(this.roomMap.get(`${pos[0]}_${pos[1]}`));
      if (pos[1] !== 0) {
        adjacentRooms.push(this.roomMap.get(`${pos[0]}_${pos[1] - 1}`));
      }
    }

    return adjacentRooms;
  }

  /**
   * 壁が破壊可能かどうかを判定する
   * 
   * @param {Wall} wall 
   */
  isBreakableWall(wall) {
    // 壁が外壁かどうか
    if (!wall.isBreakable) {
      return false;
    }

    // 壁に隣接する部屋を取得
    const adjacentRooms = this.getAdjacentRooms(wall);
    if (adjacentRooms.length > 1) {
      // 隣接する部屋のclusterが一致しなければ破壊可能
      return adjacentRooms[0].clusterNo !== adjacentRooms[1].clusterNo;
    }

    // なんか想定外の事態
    return false;
  }

  /**
   * 壁に隣接する部屋のclusterを同じにする
   * 
   * @param {Wall} wall 
   */
  mergeCluster(wall) {
    // 隣接する部屋を取得
    const adjacentRooms = this.getAdjacentRooms(wall);
    if (adjacentRooms.length > 1) {
      const clusterNo = adjacentRooms[0].clusterNo; //この番号に一致させる
      const set = this.clusters.get(clusterNo);

      const remClusterNo = adjacentRooms[1].clusterNo; //変更するcluster
      const clusterRooms = this.clusters.get(remClusterNo);
      clusterRooms.forEach((roomNo) => {
        // clusterNoを更新
        this.rooms[roomNo].clusterNo = clusterNo;

        set.add(roomNo);
      });

      this.clusters.delete(remClusterNo);
    }
  }

  /**
   * 迷路を作成する
   * 
   * @return {Array<Room>}
   */
  make() {
    // 壁の配列をシャッフルして
    // 壁をひとつ取り出す
    this.shuffle(this.walls).some((wall) => {
      // 壁が破壊可能かを判定
      if (this.isBreakableWall(wall)) {
        // 壁を破壊
        wall.isBroken = true;
        // 壁に隣接する部屋のclusterを同じにする
        this.mergeCluster(wall);

        // clusterが一つになったら終了
        if (this.clusters.size === 1) {
          return true;
        }
      }
    });

    return this.rooms;
  }
}
