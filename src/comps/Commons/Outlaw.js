import { useEffect } from "react";
// import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

const Outlaw = ({ title, children, isOpen, onClose }) => {
  // return (
  //   <Dialog className="relative z-50" open={isOpen} onClose={onClose}>
  //     <DialogBackdrop
  //       transition
  //       className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
  //     />
  //     <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
  //       <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
  //         <DialogPanel
  //           transition
  //           className="relative transform overflow-hidden rounded-xl p-5 bg-slate-900 text-slate-50 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 md:min-w-[750px] min-w-[400px] sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
  //         >
  //           <div className="flex-seperate">
  //             <h3 className="title">{title}</h3>
  //             <button
  //               type="button"
  //               className="rounded-md px-3 py-1 text-2xl text-gray-400 transition-all hover:bg-slate-800"
  //               onClick={onClose}
  //               data-autofocus
  //             >
  //               <i className="fas fa-xmark" />
  //             </button>
  //           </div>
  //           <div>{children}</div>
  //         </DialogPanel>
  //       </div>
  //     </div>
  //   </Dialog>
  // );
};

export default Outlaw;
