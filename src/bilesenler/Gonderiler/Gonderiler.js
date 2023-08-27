import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";

const Gonderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegenCB, gonderilerPropu } = props;

  return (
    <div className="posts-container-wrapper">
      {gonderilerPropu.map((gonderi, ind) => {
        return (
          <Gonderi
            gonderipropu={gonderi}
            gonderiyiBegen={gonderiyiBegenCB}
            key={ind}
          />
        );
        //her bir gönderiyi tek tek ekranda görmek istiyorum. buraya {js} i o yüzden ekledik. bir alta gönderi.js e iniyorum şimdi
      })}
      {/* gönderiler dizisini işleyip her döngüde bir Gönderi bileşeni çağırın*/}
      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
    </div>
  );
};

export default Gonderiler;
