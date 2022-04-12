import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URI } from "../../const";
import { SearchForm } from "../../component/SearchForm";

export function PublisherAdminPage() {
  const param = useParams();
  const [publisher, setPublisher] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(API_URI + "publisher/" + param.id).then((res) => {
      setPublisher(res.data);
      console.log(publisher);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        "LOADING"
      ) : (
        <>
          <SearchForm resource="publisher" />
          <div className="row tm-row">
            <div className="col-12">
              <hr className="tm-hr-primary tm-mb-55" />
            </div>
          </div>
          <div className="row tm-row">
            <div className="col-lg-8 tm-post-col">
              <div className="tm-post-full">
                <div className="mb-4">
                  <img src={API_URI + publisher.image} alt={publisher?.name} className="float-right ml-2" />
                  <h2 className="pt-2 tm-color-primary tm-post-title">{publisher?.name}</h2>

                  <p>{publisher?.description}</p>

                  <span className="d-block text-right tm-color-primary">{publisher?.publisher?.name}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
