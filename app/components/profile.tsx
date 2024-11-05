import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <Image
      className="rounded-lg"
      src="/profile.png"
      alt="프로필"
      width={300}
      height={64}
    />
  );
};

export default Profile;
