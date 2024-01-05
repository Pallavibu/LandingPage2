import profile from "../Assets/profile.jpg";
import addline from "../Assets/addline.jpg";
import flour from "../Assets/flour.jpg";
import star from "../Assets/star.jpg";
import group from "../Assets/group.jpg";
import clothes from "../Assets/clothes.jpg"
import people from "../Assets/people.jpg"

const Body = () => {
  return (
    <div>
      <div className=" bg-blue-200 px-8 py-4">
        <div className="flex gap-1 ">
          <div className="box1 w-1/4 flex flex-col gap-1">
            <div className="flex h-28  rounded-md w-80 bg-gradient-to-r from-blue-200 via-orange-100 to-orange-200">
              <div className="h-12">
                <img src={profile} alt="profile" className="ml-5 mt-6" />
              </div>
              <div className="m-5">
                <div>
                  <text className="text-base">Hello</text>
                </div>
                <div>
                  <text className="text-xl font-extrabold">Jagannath S</text>
                </div>
              </div>
            </div>
            <div className="bg-white w-80 rounded-md p-2 text-base font-medium">
              <div className="m-2 my-3">
                <p>Profile</p>
              </div>
              <div className="ml-6 my-5 flex flex-col gap-3">
                <p>Personal Information</p>
                <p>Manage Addresses</p>
                <p>Payment Card Information</p>
                <p>All Notifications</p>
              </div>
            </div>
            <div className="bg-white w-80 rounded-md p-2 text-base font-medium">
              <div className="m-2 my-3">
                <p>My Orders</p>
              </div>
              <div className="ml-6 my-5 flex flex-col gap-3">
                <p>All Orders</p>
                <p>My Wishlist</p>
                <p>My Reviews</p>
                <p>Saved For Later</p>
              </div>
            </div>
          </div>
          <div className="box2 w-3/4 flex flex-col gap-3 bg-white rounded-md">
            <div>
              <div className="flex justify-between mx-8 mt-6">
                <div className="">
                  <text className="text-2xl font-semibold">My Reviews</text>
                </div>
                <div className="flex">
                  <img src={addline} alt="addline" />
                </div>
              </div>
              <div className="m-5 shadow-xl">
                <div className="flex justify-between ">
                  <div className="flex gap-3">
                    <div>
                      <img src={flour} alt="flour" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">
                        ITC Aashirvaad Atta
                      </p>
                      <p className="text-gray-500">5kg</p>
                      <img src={star} alt="star" className="my-4 h-6" />
                    </div>
                  </div>
                  <div className="pr-4">
                    <p className="text-gray-600">Reviewd</p>
                    <p className="text-lg font-medium">Today</p>
                  </div>
                </div>
                <div className="ml-28 my-4 ">
                  <div>
                    <p className="font-semibold text-lg">Amazing Product</p>
                  </div>
                  <div className="my-3">
                    <p className="text-gray-500 ">
                      Lorem ipsum dolorsit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div>
                    <img src={group} alt="group" className="pb-6" />
                  </div>
                </div>
              </div>
              <div className="m-5 shadow-xl">
                <div className="flex justify-between ">
                  <div className="flex gap-3">
                    <div>
                      <img src={clothes} alt="clothes" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">
                        Sharma Fashion Wear
                      </p>
                      <p className="text-gray-500">Clothes Store & Designer at Rajeev Market, New Delhi, India</p>
                      <img src={star} alt="star" className="my-4 h-6" />
                    </div>
                  </div>
                  <div className="pr-4">
                    <p className="text-gray-600">Reviewd</p>
                    <p className="text-lg font-medium">Today</p>
                  </div>
                </div>
                <div className="ml-28 my-4 ">
                  <div>
                    <p className="font-semibold text-lg">Good Seller & Awesome Products</p>
                  </div>
                  <div className="my-3">
                    <p className="text-gray-500 ">
                      Lorem ipsum dolorsit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div>
                    <img src={people} alt="people" className="pb-6" />
                  </div>
                </div>
              </div>
              <div className="m-5 shadow-xl">
                <div className="flex justify-between ">
                  <div className="flex gap-3">
                    <div>
                      <img src={flour} alt="flour" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">
                        ITC Aashirvaad Atta
                      </p>
                      <p className="text-gray-500">5kg</p>
                      <img src={star} alt="star" className="my-4 h-6" />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600">Reviewd</p>
                    <p className="text-lg font-medium">Today</p>
                  </div>
                </div>
                <div className="ml-28 my-4 ">
                  <div>
                    <p className="font-semibold text-lg">Amazing Product</p>
                  </div>
                  <div className="my-3">
                    <p className="text-gray-500 ">
                      Lorem ipsum dolorsit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div>
                    <img src={group} alt="group" className="pb-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
