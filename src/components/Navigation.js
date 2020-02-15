import React from "react";

const Navigation = () => {
  return (
    <div class="flex mb-4 mr-8 mt-8">
      <ul class="flex w-full border-b">
        <li class="-mb-px mr-1 ml-64">
          <a
            class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
            href="#"
          >
            Active
          </a>
        </li>
        <li class="mr-1">
          <a
            class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            href="#"
          >
            Tab
          </a>
        </li>
        <li class="mr-1">
          <a
            class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            href="#"
          >
            Tab
          </a>
        </li>
        <li class="mr-1">
          <a
            class="bg-white inline-block py-2 px-4 text-gray-400 font-semibold"
            href="#"
          >
            Tab
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
