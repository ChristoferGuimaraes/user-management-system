import React from "react";

export function SubmitBtn() {
    function submitForm(event) {
        event.preventDefault();
        
    }
    return (
    <button type="submit" className="btn text-dark update" onSubmit={(e) => submitForm(e)}>
      Save
    </button>
  );
}
