import React from "react";
import Yorumlar from "../Yorumlar/Yorumlar";
import BegenBolumu from "./BegenBolumu";
import GonderiBasligi from "./GonderiBasligi";

const Gonderi = (props) => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { gonderipropu, gonderiyiBegen } = props;

  return (
    <div className="post-border">
      <GonderiBasligi
        username={gonderipropu.username}
        thumbnailUrl={gonderipropu.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={gonderipropu.imageUrl}
        />
      </div>
      {/* BegenBolumu düzgün çalışması için ihtiyaç duyduğu tüm proplara sahip mi? */}
      <BegenBolumu gonderiyiBegen={() => gonderiyiBegen(gonderipropu.id)} />
      {/* Yorumlar da proplara dikkat istiyor! */}
      <Yorumlar yorumlar={gonderipropu.comments} />
    </div>
  );
};

export default Gonderi;
