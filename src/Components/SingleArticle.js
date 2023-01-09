import React, { useState } from "react";
import * as api from "../api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentsList from "./CommentsList";

function SingleArticle() {
  const { article_id } = useParams();

  const [SingleArticle, setSingleArticle] = useState({});

  useEffect(() => {
    api.fetchArticleById(article_id).then(({ article }) => {
      setSingleArticle(article);
    });
  }, [article_id]);

  return (
    <div className="single--article">
      <h2>{SingleArticle.title}</h2>
      <div className="single--article--information">
        <p>Author: {SingleArticle.author}</p>
        <p>Topic: {SingleArticle.topic}</p>
        <p>Published: {SingleArticle.created_at}</p>
        <p>Article Votes: {SingleArticle.votes}</p>
        <p>Comment Count: {SingleArticle.comment_count}</p>
      </div>
      <p className="article--body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget enim
        et turpis condimentum fringilla tincidunt sit amet ipsum. In tincidunt
        diam ac quam feugiat, sit amet sodales orci tempor. Vivamus consectetur
        consequat nisi quis tempus. Mauris sodales mollis metus, et fringilla
        neque ultricies eget. Phasellus dignissim blandit dui, ultricies rhoncus
        ipsum vestibulum tincidunt. Pellentesque fringilla feugiat elit, sit
        amet cursus erat placerat vitae. Integer tempus ullamcorper vulputate.
        Suspendisse vitae tortor dictum ante aliquam imperdiet. Donec vitae
        turpis vitae velit ultrices dictum. Duis et neque id sem elementum
        lobortis mattis ut nunc. Nunc nibh dolor, aliquam sed justo vitae,
        facilisis porta dui. Nullam id libero pretium, feugiat lectus quis,
        porta odio. In non pulvinar purus. Sed mollis et felis in semper. In a
        lacus consequat, convallis massa ut, porttitor dui. Donec eleifend
        turpis eu diam congue hendrerit. Etiam nec varius dolor. Nulla luctus,
        diam vitae auctor aliquet, quam eros pulvinar dolor, sed sagittis lorem
        ligula a lectus. Cras sit amet tempus odio. Fusce et nibh turpis. Sed
        pulvinar felis ut erat viverra posuere. Mauris at nunc id ipsum suscipit
        tristique. Mauris pretium mollis tincidunt. Etiam eu eros id urna
        malesuada vestibulum. Maecenas tempor dolor in ultrices ultrices.
        Suspendisse at cursus nisi, in lacinia massa. Morbi semper, ex in
        porttitor porttitor, leo velit rhoncus lectus, at varius libero purus
        fringilla diam. Sed quis pulvinar elit. Nullam at ligula et diam
        consectetur bibendum. Sed ut nisl accumsan erat bibendum suscipit ut et
        ipsum. In vel aliquet ipsum, vitae vulputate sem. Duis quam sem,
        pulvinar id convallis ac, consectetur nec sapien. Praesent volutpat ac
        tellus et blandit. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Etiam placerat arcu et ex
        euismod, sed gravida nisi luctus. Praesent tempor ante elit, ac maximus
        nibh vestibulum et. Vestibulum mattis nibh sit amet tincidunt rutrum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Vivamus pretium dignissim
        erat sed pharetra. Donec lacinia in lorem id hendrerit. Sed tempus,
        ipsum a laoreet tempor, turpis ligula porta dolor, sit amet bibendum
        tellus tellus et neque. Aliquam molestie nulla quis quam ultricies
        tincidunt. Maecenas dui turpis, maximus ut hendrerit sit amet, porttitor
        et justo. Aliquam sit amet venenatis nibh.
      </p>
      <CommentsList />
    </div>
  );
}

export default SingleArticle;
