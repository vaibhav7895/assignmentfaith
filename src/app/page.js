import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
import {  FaIndianRupeeSign } from "react-icons/fa6";
import { PiVideoBold } from "react-icons/pi";
import { LuMessagesSquare } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
export default function Home() {
  
  return (
    <main className="">
      <div className=" w-[100vw] h-[75vh] bg-header bg-cover bg-no-repeat "></div>
      <div className="text-white absolute top-[20vw] ml-32 font-bold  w-[40vw]">
        <p className="text-[20px]"></p>
        <p className="text-[40px]">
          Learn key life lessons from the Gita: Mind control and conflict
          resolution
        </p>
      </div>
      <div className="flex justify-around w-[80vw] mx-auto">
        <div className="w-[25vw] ">
          <div className="flex justify-between px-10 py-5">
          <p className="border-b-2 border-purple-600  ">About</p>
            
            <p>Instructor</p>
            <p>Reviews</p>
          </div>
          
          <div className="w-[35vw]">
            <h2 className="text-3xl font-semibold ">About the course</h2>
            <p className="py-5">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur?
              <p className="py-5">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p className="">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Itaque earum rerum hic tenetur a
                sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                consequatur aut perferendis doloribus asperiores repellat.
              </p>
            </p>
            <div className="pb-5">
              <h2 className="text-3xl font-semibold py-5 ">
                What to expect from the course
              </h2>
              <div className="flex items-center space-x-2">
                <IoMdCheckmark />
                <p>Learn to manage your relationships</p>
              </div>
              <div className="flex items-center space-x-2">
                <IoMdCheckmark />
                <p>Better Communication</p>
              </div>
              <div className="flex items-center space-x-2">
                <IoMdCheckmark />
                <p>Time management</p>
              </div>
              <div className="flex items-center space-x-2">
                <IoMdCheckmark />
                <p>Forgiveness</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold ">Key Topics covered</h2>
              <p className="py-5">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Itaque earum rerum hic tenetur a
                sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                consequatur aut perferendis doloribus asperiores repellat.
              </p>
              <div>
                <div className="flex  space-x-2">
                  <IoMdCheckmark className="w-[5vw]" />
                  <p>
                    <span className="font-bold">
                      10 written and audio sessions
                    </span>{" "}
                    guiding you in decoding the language of numbers so that you
                    can easily receive their insights and messages.
                  </p>
                </div>
                <div className="flex space-x-2">
                  <IoMdCheckmark className="w-[5vw]" />
                  <p>
                    <span className="font-bold">
                      Intuitive exercises and homework
                    </span>{" "}
                    walk you through the energies and values of numbers and
                    number sequences so you can become your own authority.
                  </p>
                </div>
                <div className="flex  space-x-2">
                  <IoMdCheckmark className="w-[5vw]" />
                  <p>
                    {" "}
                    <span className="font-bold">A Handy reference</span> to
                    numerical meanings, so you can uncover your soul's gifts,
                    challenges, lessons, and purpose – and receive spiritual
                    guidance along your path.
                  </p>
                </div>
                <div className="flex  space-x-2">
                  <IoMdCheckmark className="w-[3vw]" />
                  <p>
                    <span className="font-bold">Expert techniques</span> for
                    manifestation offer simple ways to use numbers to co-create
                    with the universe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-purple-100 relative bottom-10  px-5 h-[40vh]">
          <div className="py-5 ">
            <p className="font-bold">Course fees</p>
            <div className="flex items-center text-[2vw] pb-2 ">
              <FaIndianRupeeSign />
              <p className="font-bold text-3xl">5,000</p>
            </div>
          </div>

          <p className="font-semibold pb-1">what's included :</p>
          <div>
            <div className="flex items-center space-x-2">
              <PiVideoBold className="text-xs" />
              <p className="text-xs font-medium ">5-on demand videos</p>
            </div>
            <div className="flex items-center space-x-2">
              <PiVideoBold className="text-xs" />
              <p className="text-xs font-medium">2 livestream sessions</p>
            </div>
            <div className="flex items-center space-x-2">
              <LuMessagesSquare className="text-xs" />
              <p className="text-xs font-medium">
                Live Q&A sessions with nityanand charan das
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <LuMessagesSquare className="text-xs " />
              <p className="text-xs font-medium">
                An active whatsapp community
              </p>
            </div>
          </div>
          <button className="bg-purple-600 text-center w-[18vw] rounded-[20px] mt-5 py-2 font-medium text-white px-5">
            Register today
          </button>
        </div>
      </div>
      <div className="w-[69vw] mx-auto px-10 ">
        <h2 className="text-3xl font-semibold py-5">About the instructor</h2>
        <div className="flex space-x-10">
          <Image
            src="/image.jpg"
            alt=""
            width={150}
            height={1}
            
            className="rounded-[50%]"
          />
          <p className=" w-[22vw]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p className=" w-[25vw]">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>
        </div>
        <div className="flex justify-between py-5 w-[40vw] mx-auto">
          <div className="flex items-center space-x-2">
            <Image src="/Facebook.svg" alt="" width={20} height={5} />
            <p className="text-xs">Facebook</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaXTwitter />
            <p>Twitter</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaYoutube className="text-red-600" />
            <p>Youtube</p>
          </div>
          <div className="flex items-center space-x-2">
            <Image src="/Insta.svg" alt="" width={20} height={5} />
            <p>Instagram</p>
          </div>
        </div>
        <div className="bg-gray-200 py-5 mt-10 mb-5">
          <CiCircleChevRight className="absolute right-96 bottom-[-192vh] text-xl"/>
          <CiCircleChevLeft  className="absolute left-96 bottom-[-192vh] text-xl" />
          <p className="w-[25vw] text-center mx-auto font-bold">
            "But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system."
          </p>
          <div className="flex  w-[20vw] mx-auto items-center justify-center space-x-2">
          <Image
            src="/image.jpg"
            alt=""
            width={20}
            height={2}
           
            className="rounded-[50%] relative top-2 "
          />
            <div className="text-center mt-5 ">
            <p className="text-xs">Name of the reviewer</p>
            <p className="text-xs">Designamtion of the reviewer</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
