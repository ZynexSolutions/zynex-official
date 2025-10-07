import Image from "next/image";

export default function LogoDisplay1({ title, branddata }) {
    return (
        <div className="logo-display-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="logo-display-title">
                            <p>{title}</p>

                            <div
                                className="logo-display-grid"
                            >
                                {branddata.map((item, i) => (
                                    <div key={i} className="logo-display-item">
                                        <Image src={item.img} alt="img" width={200} height={70} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}   