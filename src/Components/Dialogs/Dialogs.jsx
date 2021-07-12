import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={props.dialog}>{props.message}</div>;
};

let dialogsData = [
  { id: 1, name: "Eugene" },
  { id: 2, name: "Sasha" },
  { id: 3, name: "Elena" },
  { id: 4, name: "Luda" },
  { id: 5, name: "Tanya" },
  { id: 6, name: "Misha" },
];

let messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are your IT?" },
  { id: 3, message: "YO" },
  { id: 4, message: "YO" },
  { id: 5, message: "YO" },
  { id: 6, message: "YO" },
];

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
      </div>
    </div>
  );
};

export default Dialogs;
