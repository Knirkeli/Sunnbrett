import { velkommenPost } from "../app/interface";
import { client } from "../sanity/lib/client";

async function getData() {
  const query =`*[_type == "category" && title == "Velkommen"] {
    _id,
      title
  }`;

  const data = await client.fetch(query);
  return data;
}


export default async function Velkommen() {
  const data: velkommenPost[] = await getData();

  return (
    <div className="bg-gray-400">
      <div className="mx-auto">
        <div className="flex col items-center"></div>
          <h1>
            velkommen til oss
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, optio! A nulla nam error vero dolorum, quod iusto dolor animi! Numquam explicabo alias dolorem dolore, molestiae deserunt ipsam voluptatibus 
          </p>
      </div>
    </div>
  )
}