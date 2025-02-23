import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton"; // Changed to BackButton
import Spinner from "../components/Spinner"; // Fixed the typo

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/book/${id}`) // Fixed the URL syntax
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="p-4">
      <BackButton /> 
      <h1 className="my-8 text-2xl">Show Book</h1>
      {loading ? (
        <Spinner /> 
      ) : (
        <div className="flex flex-col border border-sky-600 rounded-2xl w-fit p-4">
          <div className="my-4">
            <span className="text-4xl mr-4 bg-gray-400">Id</span>
            <span>{book.id}</span>
          </div>
          <div className="my-4">
            <span className="text-4xl mr-4 bg-gray-400">Title</span>
            <span>{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-4xl mr-4 bg-gray-400">Author</span>
            <span>{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-4xl mr-4 bg-gray-400">Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-4xl mr-4 bg-gray-400">Create Time</span>
            <span>{new Date(book.createTime).toString()}</span> 
          </div>
          <div className="my-4">
            <span className="text-4xl mr-4 bg-gray-400">Last Update Time</span>
            <span>{new Date(book.updatedAt).toString()}</span> 
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
