import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./counterSlice";

// export const { increment } = counterSlice.actions;

const App = () => {
  const res = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  // console.log(res)
  console.log(typeof res);
  const handleClick = () => {
    dispatch(increment(res));
  };

  /**
   * l'etat permet de décrire l'etate de l'application à un moment préci
   *
   * la vue : effectue un rendu en fonction de l'état
   * action: ce sont de évènements qui se produise dans application
   *
   *
   */
  // const [listeDesEleves, setListeDesEleves] = useState([
  //   { id: 1, prenom: "Mouhamed" },
  //   { id: 2, prenom: "Doudou" },
  //   { id: 3, prenom: "Khadim" },
  //   { id: 4, prenom: "kana" },
  //   { id: 5, prenom: "nafi" },
  //   { id: 6, prenom: "laye" }
  // ]);

  // const handleClick = () => {
  //   store.dispatch();
  // };
  return (
    <>
      <button onClick={() => handleClick()}>compter :[ {res} ]</button>
      {/* <User
        listeDesEleves={listeDesEleves}
        setListeDesEleves={setListeDesEleves}
      /> */}
    </>
  );
};

// const User = ({ listeDesEleves, setListeDesEleves }) => {
//   const handleClick = (id) => {
//     const newListe = listeDesEleves.filter((item) => item.id !== id);
//     setListeDesEleves(newListe);
//   };

//   return (
//     <>
//       <Form
//         listeDesEleves={listeDesEleves}
//         setListeDesEleves={setListeDesEleves}
//       />

//       {listeDesEleves.map((i) => {
//         return (
//           <ul key={i.id}>
//             <li>{i.id}</li>
//             <li>
//               {i.prenom}{" "}
//               <button onClick={() => handleClick(i.id)}>Clicme</button>
//             </li>
//           </ul>
//         );
//       })}
//     </>
//   );
// };

// const Form = ({ listeDesEleves, setListeDesEleves }) => {
//   const [name, setName] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newObj = { id: Date.now().toLocaleString(), prenom: name };
//     // setListeDesEleves(newObj);
//     setListeDesEleves((prev) => {
//       console.log(prev);
//       return [...prev, newObj];
//     });
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="name"
//         />
//       </form>
//     </>
//   );
// };
export default App;
