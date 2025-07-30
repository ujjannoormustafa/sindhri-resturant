import Data from "@data/sections/categories.json";
import Link from "next/link";

const CategoriesSection = ({ heading = 1, paddingTop = 0, type = 1, columns }) => {
  var columnsClass = '';

  switch (columns) {
    case 4:
        columnsClass = 'col-lg-3';
    break;
    case 3:
        columnsClass = 'col-lg-4';
    break;
    default:
        columnsClass = 'col-lg-6';
  }

  return (
    <>
        {/* categories */}
        <section className={`sb-p-${paddingTop}-60`}>
            <div className="container">
                

                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="sb-mb-30" style={{ textAlign: 'center', marginTop: '90px' }}>Our Categories</h2>
                    </div>
                </div>
                <div className="row">
                    {Data.items.map((item, key) => (
                    <div className={columnsClass} key={`categories-item-${key}`}>
                        <a href={item.link} className={type == 1 ? "sb-categorie-card sb-categorie-card-2 sb-mb-30" : "sb-categorie-card sb-mb-30"} style={{ position: 'relative', overflow: 'hidden' }}>
                            <div style={{ 
                                position: 'absolute', 
                                top: '0', 
                                right: '0', 
                                width: '80px', 
                                height: '80px', 
                                backgroundImage: 'url(/img/ajrak.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                                zIndex: '1'
                            }}></div>
                            <div className="sb-card-body">
                            {/* <div className="sb-category-icon" style={{ textAlign: 'left', marginBottom: '15px' }}> */}
                                <i className={item.icon} style={{ fontSize: '48px', color: '#ECC402' }}></i>
                            {/* </div> */}
                            <div className="sb-card-descr" style={{ textAlign: 'left' }}>
                                <h3 className="sb-mb-10">{item.title}</h3>
                                <p className="sb-text">{item.text}</p>
                            </div>
                            </div>
                        </a>
                    </div>
                    ))}
                </div>
            </div>
        </section>
        {/* categories end */}
    </>
  );
};

export default CategoriesSection;