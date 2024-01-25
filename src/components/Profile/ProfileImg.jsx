import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

const ProfileImg = () => {
  const avatarUrl2 = useRef("https://placehold.co/150x150");
  const [modalOpen, setModalOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("https://placehold.co/150x150");
  const updateAvatar = (imgSrc) => {
    setAvatarUrl(imgSrc);
    //console.log(avatarUrl);
    console.log("อัพเดตรูปภาพสำเร็จ");
  };

  const handleClickClose = () => {
    setAvatarUrl("https://placehold.co/150x150");
    //console.log(avatarUrl);
    console.log("อัพเดตรูปภาพสำเร็จ");
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="relative border-2 border-black rounded-full overflow-hidden w-[150px] h-[150px]">
        {/* <img
          src={avatarUrl}
          alt="Avatar"
          className="w-[150px] h-[150px]  " //Size border
        />
        <button
          className="flex absolute top-1/2 right-4 ml-auto w-fit p-[.35rem] rounded-lg bg-transparent hover:bg-[#ddd] border border-black"
          title="Change photo"
          onClick={() => setModalOpen(true)}
        >
          <p className="text-black">Upload Image</p>
        </button> */}
        <button className="" onClick={() => setModalOpen(true)}>
          <img src={avatarUrl} alt="Avatar" />
        </button>
      </div>

      {modalOpen && (
        <Modal
          updateAvatar={updateAvatar}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ProfileImg;
