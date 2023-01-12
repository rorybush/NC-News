//TopicList.js

import React, { useEffect } from "react";
import * as api from "../api";
import { useState } from "react";
import { Link } from "react-router-dom";

function Topics() {
  const [TopicList, setTopicList] = useState([]);
  const [TopicListIsLoading, setTopicListIsLoading] = useState(true);

  useEffect(() => {
    api.fetchTopics().then(({ topics }) => {
      setTopicList(topics);
      setTopicListIsLoading(false);
    });
  }, []);
  return (
    <div>
      {TopicListIsLoading ? (
        "Loading Topics..."
      ) : (
        <div>
          {TopicList.map((topic, i) => {
            return (
              <ul key={i}>
                <li key={Math.random()}>
                  <Link to={`${topic.slug}`}>
                    <h3>{topic.slug}</h3>
                  </Link>
                  <p>{topic.description}</p>
                </li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Topics;
