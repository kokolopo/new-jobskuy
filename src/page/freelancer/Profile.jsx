import { Avatar, Button, Kbd, Tabs } from "flowbite-react";
import React from "react";
import { HiUser } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { GrTask } from "react-icons/gr";
import portofolio_1 from "../../assets/portofolio_1.png";

const Profile = () => {
  return (
    <>
      <div className="flex space-x-4 fixed">
        <Sidebar />

        <div className="flex space-x-7 px-4 py-3 w-full">
          {/* biodata */}
          <section className="bg-basic w-1/4 h-fit py-7 px-4 flex flex-col space-y-3 rounded-lg shadow-lg">
            <Avatar
              img="https://img.icons8.com/3d-fluency/94/person-male--v4.png"
              size="xl"
              rounded
              bordered
            />

            <div className="text-xl">Fullname</div>
            <div className="text-gray-400">Profession</div>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <FiMapPin />
              <span> Cikutra, Bandung - Jawa Barat</span>
            </div>
            <div className="text-left text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              laoreet elementum lacus, vel condimentum risus viverra nec. In
              efficitur vitae ligula eleifend sollicitudin. Fusce nec tellus
              rhoncus, dignissim leo sit amet, accumsan sapien. Donec accumsan.
            </div>
            <Button className="bg-secondary">Edit</Button>
            <div className="">Skill</div>
            <div className="flex flex-wrap gap-1">
              <Kbd>Shift</Kbd>
              <Kbd>Ctrl</Kbd>
              <Kbd>Tab</Kbd>
              <Kbd>Caps Lock</Kbd>
              <Kbd>Esc</Kbd>
              <Kbd>Spacebar</Kbd>
              <Kbd>Enter</Kbd>
            </div>
            <div className="text-gray-400">
              <div className="flex items-center space-x-2">
                <CiMail size={20} />
                <span>username@gmail.com</span>
              </div>
            </div>
          </section>

          {/* portofolio & experience */}
          <section className="bg-basic flex flex-col space-y-4 w-[60vw] h-fit p-7 rounded-lg shadow-lg">
            <Tabs aria-label="Tabs with underline" style="underline">
              <Tabs.Item active title="Portofolio">
                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-col w-[260px]">
                    <img src={portofolio_1} alt="asdasd" />
                    <span className="text-center text-gray-400">
                      Remainder App
                    </span>
                  </div>
                  <div className="flex flex-col w-[260px]">
                    <img src={portofolio_1} alt="asdasd" />
                    <span className="text-center text-gray-400">
                      Remainder App
                    </span>
                  </div>
                  <div className="flex flex-col w-[260px]">
                    <img src={portofolio_1} alt="asdasd" />
                    <span className="text-center text-gray-400">
                      Remainder App
                    </span>
                  </div>
                  <div className="flex flex-col w-[260px]">
                    <img src={portofolio_1} alt="asdasd" />
                    <span className="text-center text-gray-400">
                      Remainder App
                    </span>
                  </div>
                </div>
              </Tabs.Item>

              <Tabs.Item title="Pengalaman Kerja">
                <div className="flex flex-col space-y-3">
                  <div className="flex flex-col space-y-1">
                    <div className="">Posisi</div>
                    <div className="text-gray-400 text-sm">Nama Perusahaan</div>
                    <div className="text-sm flex space-x-2 text-gray-400">
                      <div className="">July 2020 - June 2023 </div>
                      <div className="">11 Bulan</div>
                    </div>
                    <div className="text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In laoreet elementum lacus, vel condimentum risus viverra
                      nec. In efficitur vitae ligula eleifend sollicitudin.
                    </div>
                    <span className="w-full h-[1px] bg-gray-300"></span>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div className="">Posisi</div>
                    <div className="text-gray-400 text-sm">Nama Perusahaan</div>
                    <div className="text-sm flex space-x-2 text-gray-400">
                      <div className="">July 2020 - June 2023 </div>
                      <div className="">11 Bulan</div>
                    </div>
                    <div className="text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In laoreet elementum lacus, vel condimentum risus viverra
                      nec. In efficitur vitae ligula eleifend sollicitudin.
                    </div>
                    <span className="w-full h-[1px] bg-gray-300"></span>
                  </div>
                </div>
              </Tabs.Item>
            </Tabs>
          </section>
        </div>
      </div>
    </>
  );
};

const Sidebar = () => {
  return (
    <nav className="bg-primary w-1/5 h-screen px-2 py-3 space-y-7">
      {/* logo */}
      <div className="logo italic font-semibold text-5xl text-secondary flex justify-center">
        Jobskuy
      </div>

      {/* menu */}
      <div className="flex flex-col">
        {/* item */}
        <div className="flex space-x-2 text-basic hover:bg-basic hover:text-secondary p-2 rounded-md">
          <HiUser size={28} />
          <div className=" font-medium text-2xl">Profile</div>
        </div>

        <div className="flex space-x-2 text-basic hover:bg-basic hover:text-secondary p-2 rounded-md">
          <GrTask size={28} />
          <div className=" font-medium text-2xl">Tugas</div>
        </div>
      </div>
    </nav>
  );
};

export default Profile;
