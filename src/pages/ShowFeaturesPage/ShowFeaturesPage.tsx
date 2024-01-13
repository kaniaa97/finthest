import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bgShowFeatures from "/images/bg-show-features.png";
import imgCalculator from "../../assets/Calculator.svg";
import imgMandatory from "../../assets/Mandatory.svg";
import imgValidation from "../../assets/Validation.svg";
import imgChevron from "../../assets/Chevron.svg";

export default function ShowFeaturesPage() {
  const navigate = useNavigate();
  const [isAnimating, setAnimating] = React.useState(false);

  const handleSkipClick = () => {
    setAnimating(true);
    setTimeout(() => {
      navigate("/articles");
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={isAnimating ? { opacity: 0, y: -50 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={bgShowFeatures}
        alt="background show features"
        className="w-full h-auto"
      />
      <div className="px-5 md:px-8 lg:px-16 xl:px-24 flex flex-col gap-8 mx-auto max-w-3xl">
        <div className="w-full">
          <h4 className="text-2xl w-[18rem] text-[#0F172A] font-bold">
            Fitur yang disediakan Finthest
          </h4>
        </div>
        <div className="flex items-center">
          <div className="w-16 md:w-20">
            <img src={imgCalculator} alt="Manajemen Anggaran" />
          </div>
          <div className="flex-1 ml-4 md:w-1/2">
            <div className="text-[#475569] font-bold">Manajemen Anggaran</div>
            <div className="text-sm mt-3 leading-5 text-[#475569]">
              Menghitung total pemasukan dan pengeluaran bersih Anda
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <div className="text-base text-[#475569] font-bold">Pengingat</div>
            <div className=" text-sm mt-3 leading-5 text-[#475569]">
              Memberitahu atau mengingatkan anda mengenai pembayaran tagihan
              maupun target keuangan
            </div>
          </div>
          <div className="flex-none ml-4">
            <img src={imgMandatory} alt="Pengingat" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-16 md:w-20">
            <img src={imgValidation} alt="Keamanan & Privasi" />
          </div>
          <div className="flex-1 ml-4 md:w-1/2">
            <div className="text-[#475569] font-bold">Keamanan & Privasi</div>
            <div className="text-sm mt-3 leading-5 text-[#475569]">
              Menjamin keamanan dan enkripsi untuk melindungi informasi keuangan
              anda.
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link to="/articles">
            <img src={imgChevron} alt="Chevron" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
