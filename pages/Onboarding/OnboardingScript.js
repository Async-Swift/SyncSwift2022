// if (typeof document !== "undefined") {
//   const grid = document.querySelector(".gridItemImages}");
// }

// 안에서 window 객체를 사용
// const grid = document.querySelector(".gridItemImages}");

// reportWindowSize = () => {
//   if (typeof window !== "object") return;
//   console.log(window.innerWidth);
//   // console.log(document.querySelector(".gridItemImages}"));
// };
// if (typeof window !== "undefined") {
//   window.onresize = reportWindowSize;
// }

/*
  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    console.log(document.querySelector("#grid"));
    //함수 호출
    //원하는 함수 호출.
    let itemWidth = 80;
    let paddingWidth = 120;
    var imageModule = `<p>
        <Image src={birdImage} alt="Bird Image" width={${itemWidth}} height={${itemWidth}} />
      </p>`;
    var gridColumn =
      parseInt((window.innerWidth - paddingWidth) / itemWidth) * imageModule;

    document.querySelector("#grid").innerHTML = `
    <article id="grid">
      <div className={styles.gridItemImages}>
    ${gridColumn}
          <p>
          <img src=birdImage alt="새 아이콘">
          </p>
        </div>
    </article>
    `;
  };

  const [windowWidth, setWidth] = useState(0);
  const [windowHeight, setHeight] = useState(0);

  useEffect(() => {
    console.log(`width ${window.innerWidth} height ${window.innerHeight}`);

    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      // window.removeEventListener("resize", handleResize);
    };
  }, [windowHeight, windowWidth]);
  */
