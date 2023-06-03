import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

export const LiveMessage = () => {
//   const toastTrigger = document.getElementById("liveToastBtn");
//   const toastLiveExample = document.getElementById("liveToast");

//   if (toastTrigger) {
//     const toastBootstrap =
//       bootstrap.Toast.getOrCreateInstance(toastLiveExample);
//     toastTrigger.addEventListener("click", () => {
//       toastBootstrap.show();
//     });
//   }



//   const handleMessage = () => {
//     const toastLiveExample = document.getElementById("liveToast");

//     const toastBootstrap =
//     bootstrap.Toast.getOrCreateInstance(toastLiveExample);
//        toastBootstrap.show();

//   };
//   handleMessage();
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        id="liveToastBtn"
        
      >
        Show live toast
      </button>

      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <img src="..." className="rounded me-2" alt="..." />
            <strong className="me-auto">Oyeee</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">Dale a dar clases pendejo</div>
        </div>
      </div>
    </>
  );
};
