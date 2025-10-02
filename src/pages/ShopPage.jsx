import ShopCategories from "../components/shopPage/ShopCategories";
import ShopProductCards from "../components/shopPage/ShopProductCards";
import BrandLogos from "../components/sharedcomp/BrandLogos";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  getProducts,
  getFilteredProducts,
} from "../store/thunks/productThunks";
import { setPage, clearProductList } from "../store/actions/productActions";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

export default function ShopPage() {
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  const [filters, setFilters] = useState({
    categoryId: categoryId || "",
    filter: "",
    sort: "price:asc",
  });

  const { page, limit, total } = useSelector((state) => state.product);

  useEffect(() => {
    if (categoryId) {
      setFilters((prev) => ({ ...prev, categoryId }));
      dispatch(setPage(1));
    }
  }, [categoryId, dispatch]);

  useEffect(() => {
    const offset = Math.max(0, (page - 1) * limit);

    dispatch(clearProductList());

    if (filters.categoryId || filters.filter || filters.sort) {
      dispatch(getFilteredProducts({ ...filters, limit, offset }));
    } else {
      dispatch(getProducts({ limit, offset }));
    }
  }, [filters, page, limit, dispatch]);

  const handlePageClick = ({ selected }) => {
    const newPage = selected + 1;
    if (newPage == page) return;

    dispatch(setPage(newPage));
  };

  const handleFilter = () => {
    dispatch(setPage(1));
    const offset = 0;
    dispatch(getFilteredProducts({ ...filters, limit, offset }));
  };

  return (
    <>
      <ShopCategories />
      <ShopProductCards
        categoryId={categoryId}
        filters={filters}
        setFilters={setFilters}
        handleFilter={handleFilter}
      />
      <ReactPaginate
        pageCount={Math.ceil(total / limit)}
        onPageChange={handlePageClick}
        previousLabel={"Previous"}
        nextLabel={"Next"}
        forcePage={page - 1}
        containerClassName="page-buttons flex justify-center mb-6"
        pageClassName="text-[#23A6F0] py-[1.563rem] px-5 border border-x-[#E9E9E9] border-y-[#BDBDBD] hover:cursor-pointer font-bold text-sm"
        activeClassName="bg-[#23A6F0] text-white"
        previousClassName="bg-[#F3F3F3] text-[#BDBDBD] p-[1.563rem] rounded-tl-[0.421rem] rounded-bl-[0.421rem] border border-y-[#BDBDBD] hover:cursor-pointer"
        nextClassName="text-[#23A6F0] p-[1.563rem] rounded-tr-[0.421rem] rounded-br-[0.421rem] border border-y-[#BDBDBD] border-x-[#BDBDBD] hover:cursor-pointer"
        breakLabel="..."
        breakClassName="px-4 border border-x-[#E9E9E9] border-y-[#BDBDBD] pt-4"
      />
      <BrandLogos />
    </>
  );
}
