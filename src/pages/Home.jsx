import { useEffect, useState } from "react";
import axios from "axios"; 
import Spinner from "../components/Spinner"; 
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs"; 
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://localhost:5555/book")
      .then((res) => {
        setBook(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Book List</h1>
        <Link to="/book/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md text-center">No</th>
              <th className="border border-slate-600 rounded-md text-center">Title</th>
              <th className="border border-slate-600 rounded-md text-center">Author</th>
              <th className="border border-slate-600 rounded-md text-center">Publish Year</th>
              <th className="border border-slate-600 rounded-md text-center">Operations</th>
              
            </tr>
            
          </thead>
          <tbody>
            {book.map((book, index) => (
              <tr key={book._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.title}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.author}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.publishYear}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/book/details/${book._id}`}>
                      <BsInfoCircle className="text-yellow-600 text-4xl" />
                    </Link>

                    <Link to={`/book/edit/${book._id}`}>
                      <AiOutlineEdit className=" text-green-800 text-4xl" />
                    </Link>

                    <Link to={`/book/delete/${book._id}`}>
                      <MdOutlineDelete className="text-red-800 text-4xl" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
