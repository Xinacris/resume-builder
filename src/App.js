import "./App.css";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    nameSurname: "",
    job: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <div class="grid grid-cols-3 gap-3">
        <div>
          <input
            maxLength={20}
            type="text"
            name="nameSurname"
            value={values.nameSurname}
            onChange={onChange}
          />{" "}
          <input
            maxLength={20}
            type="text"
            name="job"
            value={values.job}
            onChange={onChange}
          />
        </div>
        <div>
          <div class="e9_3">
            <div className="NameJob">
              <span class="e0_73">{values.nameSurname}</span>
              <span class="e0_74">{values.job}</span>
            </div>

            <div className="ProfileInfo">
              <span class="e0_69">PROFILE INFO</span>
              <span class="e0_72">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
              </span>
            </div>

            <div className="Education">
              <span class="e0_37">EDUCATION</span>
              <span class="e0_38 highSchool">High School Name</span>
              <span class="e0_39">HIGH SCHOOL</span>
              <span class="e0_40">2011 - 2014</span>
              <span class="e0_41">London</span>
              <span class="e0_42">University Name</span>
              <span class="e0_43">BACHELOR DEGREE</span>
              <span class="e0_44">2014 - 2018</span>
              <span class="e0_45">London</span>
            </div>
            <div className="Skills">
              <span class="e0_47">SKILLS</span>
              <div class="e0_16">
                <span class="e0_17">PHOTOSHOP</span>
                <span class="e0_19">ILLUSTRATOR</span>
                <span class="e0_23">PREMIER</span>
                <span class="e0_25">INDESIGN</span>
                <span class="e0_27">ANIMATE</span>
                <span class="e0_29">FIGMA</span>
                <span class="e0_31">CORELDRAW</span>
              </div>
            </div>
            <div className="Experience">
              <span class="e0_46">WORK EXPERIENCE</span>
              <span class="e0_48">Companies Name | 2018 - 2019</span>
              <span class="e0_49">GRAPHIC DESIGNER</span>
              <span class="e0_50">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. sed
                diam nonummy nibh euismod tincidunt.
              </span>
              <span class="e0_51">Companies Name | 2019 - 2020</span>
              <span class="e0_52">GRAPHIC DESIGNER</span>
              <span class="e0_53">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. sed
                diam nonummy nibh euismod tincidunt.
              </span>
              <span class="e0_54">Companies Name | 2020 - 2021</span>
              <span class="e0_55">GRAPHIC DESIGNER</span>
              <span class="e0_56">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. sed
                diam nonummy nibh euismod tincidunt.
              </span>
            </div>
            <div className="Awards">
              <span class="e0_70">AWARD</span>
              <span class="e0_61">2017 - Award Name Detil About The Award</span>
              <span class="e0_62">2018 - Award Name Detil About The Award</span>
              <span class="e0_63">2019 - Award Name Detil About The Award</span>
              <span class="e0_64">2016 - Award Name Detil About The Award</span>
            </div>
            <div className="References">
              <span class="e0_71">REFERENCES</span>
              <span class="e0_57">Companies Name | CEO</span>
              <span class="e0_58">ALAND SHAMUS</span>
              <span class="e0_59">username@gmail.com</span>
              <span class="e0_60">+22 599 253 35</span>
              <span class="e0_65">Companies Name | CEO</span>
              <span class="e0_66">BARNARD GIBSON</span>
              <span class="e0_67">username@gmail.com</span>
              <span class="e0_68">+13 492 419 99</span>
            </div>
            <div className="Footer">
              <span class="e0_34">62 Coleridge Rd, Stretford, London, Eng</span>
              <span class="e0_35">youremail@gmail.com</span>
              <span class="e0_36">+11 493 000 23</span>
            </div>
          </div>
        </div>
        <div>Export</div>
      </div>
    </>
  );
}

export default App;
