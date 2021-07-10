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

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Eugene" id="1" />
        <DialogItem name="Sasha" id="2" />
        <DialogItem name="Elena" id="3" />
        <DialogItem name="Luda" id="4" />
        <DialogItem name="Tanya" id="5" />
        <DialogItem name="Misha" id="6" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="How are your IT?" />
        <Message message="YO" />
        <Message message="YO" />
        <Message message="YO" />
      </div>
    </div>
  );
};

export default Dialogs;
