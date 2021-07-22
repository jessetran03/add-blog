import React from "react";
import Tabs from "./components/Tabs";
import blogs from "./blogs";
import "./App.css";
import { CopyToClipboard } from "react-copy-to-clipboard";


function App() {
  return (
    <div>
      <h1>Tabs Demo</h1>
      <Tabs>
        <div label="1">
          <h3>Title:</h3>
          <CopyToClipboard text={blogs[0].title}>
            <div class="text-box">{blogs[0].title}</div>
          </CopyToClipboard>
            <h3>Body: (Use original documents to copy)</h3>
            <div class="text-box">{blogs[0].body}</div>
            <h3>Meta Description:</h3>
          <CopyToClipboard text={blogs[0].meta}>
            <div class="text-box">{blogs[0].meta}</div>
          </CopyToClipboard>
            <h3>Date:</h3>
          <CopyToClipboard text={blogs[0].date}>
            <div class="text-box">{blogs[0].date}</div>
          </CopyToClipboard>
        </div>
        <div label="2">
          <h3>Title:</h3>
          <CopyToClipboard text={blogs[1].title}>
            <div class="text-box">{blogs[1].title}</div>
          </CopyToClipboard>
            <h3>Body:</h3>
          <CopyToClipboard text={blogs[1].body}>
            <div class="text-box">{blogs[1].body}</div>
          </CopyToClipboard>
            <h3>Meta Description:</h3>
          <CopyToClipboard text={blogs[1].meta}>
            <div class="text-box">{blogs[1].meta}</div>
          </CopyToClipboard>
            <h3>Date:</h3>
          <CopyToClipboard text={blogs[1].date}>
            <div class="text-box">{blogs[1].date}</div>
          </CopyToClipboard>
        </div><div label="3">
          <h3>Title:</h3>
          <CopyToClipboard text={blogs[2].title}>
            <div class="text-box">{blogs[2].title}</div>
          </CopyToClipboard>
            <h3>Body:</h3>
          <CopyToClipboard text={blogs[2].body}>
            <div class="text-box">{blogs[2].body}</div>
          </CopyToClipboard>
            <h3>Meta Description:</h3>
          <CopyToClipboard text={blogs[2].meta}>
            <div class="text-box">{blogs[2].meta}</div>
          </CopyToClipboard>
            <h3>Date:</h3>
          <CopyToClipboard text={blogs[2].date}>
            <div class="text-box">{blogs[2].date}</div>
          </CopyToClipboard>
        </div><div label="4">
          <h3>Title:</h3>
          <CopyToClipboard text={blogs[3].title}>
            <div class="text-box">{blogs[3].title}</div>
          </CopyToClipboard>
            <h3>Body:</h3>
          <CopyToClipboard text={blogs[3].body}>
            <div class="text-box">{blogs[3].body}</div>
          </CopyToClipboard>
            <h3>Meta Description:</h3>
          <CopyToClipboard text={blogs[3].meta}>
            <div class="text-box">{blogs[3].meta}</div>
          </CopyToClipboard>
            <h3>Date:</h3>
          <CopyToClipboard text={blogs[3].date}>
            <div class="text-box">{blogs[3].date}</div>
          </CopyToClipboard>
        </div><div label="5">
          <h3>Title:</h3>
          <CopyToClipboard text={blogs[4].title}>
            <div class="text-box">{blogs[4].title}</div>
          </CopyToClipboard>
            <h3>Body:</h3>
          <CopyToClipboard text={blogs[4].body}>
            <div class="text-box">{blogs[4].body}</div>
          </CopyToClipboard>
            <h3>Meta Description:</h3>
          <CopyToClipboard text={blogs[4].meta}>
            <div class="text-box">{blogs[4].meta}</div>
          </CopyToClipboard>
            <h3>Date:</h3>
          <CopyToClipboard text={blogs[4].date}>
            <div class="text-box">{blogs[4].date}</div>
          </CopyToClipboard>
        </div>
      </Tabs>
    </div>
  );
}

export default App;
