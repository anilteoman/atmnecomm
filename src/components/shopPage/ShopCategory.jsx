

export default function ShopCategory({category}) {
    return (
        <section className="shop-category flex flex-col items-center">
            <div className="category w-[20.75rem] h-[18.75rem] md:w-[12.813rem] md:h-[13.938rem] bg-center bg-cover flex flex-col items-center justify-center text-white" style={{backgroundImage: `linear-gradient(rgba(33,33,33,0.25)), url(${category?.img})`}}>
                <h5 className="text-base leading-6 font-bold">{category?.title}</h5>
                <h6 className="text-sm leading-6 font-bold">{category?.gender === "k" ? "Kadın" : "Erkek"}</h6>
            </div>
        </section>
    );
}