import React from "react";
import uniqid from "uniqid";

const Overview = (props) => {
  const {
    tasks,
    onDelete,
    edit,
    editTask,
    onEdit,
    onSubmitEdit,
    editChange,
  } = props;

  return (
    <div className="ui one column centered grid">
      {tasks.map((e, index) => {
        return (
          <>
            {edit[index] ? (
              <>
                <div className="ten wide column ui grid form">
                  <div className="one wide column">{tasks.indexOf(e)}.</div>
                  <div className="thirteen wide column" key={uniqid()}>
                    <input
                      onChange={editChange}
                      value={editTask}
                      type="text"
                      autoFocus="true"
                    ></input>
                  </div>
                  <div className="one wide column">
                    <i
                      className="save icon"
                      // type="submit"
                      onClick={() => onSubmitEdit(index)}
                    ></i>
                  </div>
                  <div className="one wide column">
                    <i
                      className="undo icon"
                      onClick={() => {
                        onEdit();
                      }}
                    ></i>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="ten wide column ui grid">
                  <div className="one wide column">{tasks.indexOf(e)}.</div>
                  <div className="thirteen wide column" key={uniqid()}>
                    {e}
                  </div>
                  <div className="one wide column">
                    <i className="edit icon" onClick={() => onEdit(index)}></i>
                  </div>
                  <div className="one wide column">
                    <i
                      className="close icon"
                      onClick={() => {
                        onDelete(e);
                      }}
                    ></i>
                  </div>
                </div>
              </>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Overview;
