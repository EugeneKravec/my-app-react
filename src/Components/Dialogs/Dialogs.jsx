import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className = {s.dialogs}>
        <div className = {s.dialogsItems}>
            <div className = {s.active}>Eugene</div>
            <div className = {s.dialog}>Sasha</div>
            <div className = {s.dialog}>Elena</div>
            <div className = {s.dialog}>Luda</div>
            <div className = {s.dialog}>Tanya</div>
            <div className = {s.dialog}>Misha</div>
        </div>
        <div className = {s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>How are your IT?</div>
            <div className={s.message}>YO</div>
        </div>
    </div>
  );
};

export default Dialogs;
