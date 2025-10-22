import React from 'react';

const Section2 = () => {
  return (
    <div className="mx-10 flex items-start gap-10">
      <div>
        <img src="/img.png" className="w-[550px] h-[540px] " alt="" />
      </div>

      <div className="flex flex-col space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white font-semibold">1</div>
          <div>
            <h3 className="font-semibold text-gray-900">Erat at semper</h3>
            <p className="text-gray-600 text-sm mt-1">
              Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum...
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white font-semibold">2</div>
          <div>
            <h3 className="font-semibold text-gray-900">Urna nec vivamus risus duis arcu</h3>
            <p className="text-gray-600 text-sm mt-1">
              Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white font-semibold">3</div>
          <div>
            <h3 className="font-semibold text-gray-900">Lobortis euismod imperdiet tempus</h3>
            <p className="text-gray-600 text-sm mt-1">
              Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white font-semibold">4</div>
          <div>
            <h3 className="font-semibold text-gray-900">Cras nulla aliquet nam eleifend amet et</h3>
            <p className="text-gray-600 text-sm mt-1">
              Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
