import { useEffect, useState } from "react";
import {
  PlayerState,
  addPlayer,
  deletePlayer,
  drecrementPoint,
  incrementPoint,
} from "../store/reducer/addPlayer";
import "./Main.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
const Main = () => {
  const [newPlayer, setNewPlayer] = useState<PlayerState>({
    id: Math.floor(Math.random() * 100),
    name: "",
    point: 1,
    check: false,
  });
  const [maxPoint, setMaxPoint] = useState<number>(0);
  const [sumPoint, setSumPoint] = useState<number>(0);
  const dispatch = useDispatch();
  const allPlayers: any = useSelector((state: RootState) => state.player.players);
  console.log(allPlayers);
  const handleAdd = () => {
    dispatch(addPlayer(newPlayer));
    setNewPlayer({
      id: Math.floor(Math.random() * 100),
      name: "",
      point: 1,
      check: false,
    });
  };
  const checkPoint = () => {
    let max = 1;
    for (let i = 0; i < allPlayers.length; i++) {
      if (allPlayers[i].point > max) {
        max = allPlayers[i].point;
      } 
    }
    setMaxPoint(max);
  };
  const sum = () => {
    let sum = 0;
    for (let i = 0; i < allPlayers.length; i++) {
      sum += allPlayers[i].point;
    }
    setSumPoint(sum);
  };
  useEffect(() => {
    checkPoint();
    sum();
  }, [allPlayers]);
  console.log(maxPoint);
  console.log(sumPoint);

  return (
    <>
      <div id="container">
        <div className="header">
          <div className="header__left">
            <p className="header__left__p">Players: {allPlayers.length}</p>
            <p className="header__left__p">Total Points: {sumPoint}</p>
          </div>
          <div className="header__mid">
            <h1>Bảng điểm</h1>
          </div>
          <div className="header__right"></div>
        </div>
        <div className="main">
        {allPlayers.length == 0 ? 
            <div className="main__render--none">
                <p style={{fontSize: "30px", fontWeight: "700",margin:"0 auto"}}>Không còn người chơi</p>
            </div> 
            :
            <>
            {allPlayers.map((item: PlayerState) => {
                return (
                  <div className="main__render">
                    <div className="main__render--left">
                      <span
                        className="material-symbols-outlined"
                        onClick={() => dispatch(deletePlayer(item))}
                        style={{
                          fontSize: "30px",
                          opacity: "0.5",
                          marginLeft: "25px",
                          cursor: "pointer",
                        }}
                      >
                        delete
                      </span>
                    </div>
                    <div className="main__render--mid">
                      <div className="mid__left">
                        <span
                          className="material-symbols-outlined"
                          style={{
                            fontSize: "70px",
                            color: `${item.point == maxPoint ? "red" : ""}`,
                          }}
                        >
                          crowdsource
                        </span>
                      </div>
                      <div className="mid__right">
                        <p className="mid__right__text">{item.name}</p>
                      </div>
                    </div>
                    <div className="main__render--right">
                      <div className="right__left">
                        <span
                          className="icon--decrement"
                          onClick={() => dispatch(drecrementPoint(item))}
                        >
                          -
                        </span>
                      </div>
                      <div className="right__mid">
                        <input
                          type="text"
                          className="icon--point"
                          style={{
                            width: "40px",
                            textAlign: "center",
                            fontSize: "25px",
                            marginLeft: "20px",
                          }}
                          onChange={(e) =>
                            setNewPlayer({
                              ...newPlayer,
                              point: e.target.valueAsNumber,
                            })
                          }
                          value={item.point}
                        />
                      </div>
                      <div className="right__right">
                        <span
                          className="icon--increment"
                          onClick={() => dispatch(incrementPoint(item))}
                        >
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                );
            })}
            </>
            
        }
          
          
        </div>
        <div className="footer">
          <div className="footer__left">
            <input
              type="text"
              className="footer__left__input"
              placeholder="Enter name"
              name="name"
              onChange={(e) =>
                setNewPlayer({ ...newPlayer, name: e.target.value })
              }
              value={newPlayer.name}
            />
          </div>
          <div className="footer__right">
            <button className="btn" onClick={handleAdd}>
              ADD PLAYER
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
