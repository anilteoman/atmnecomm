export const createProductUrl = (product, categories) => {
    const category = categories.find((cat) => cat.id == product.category_id);
    const gender = category?.gender;
    const categoryName = category?.title;
    const categoryId = product.category_id;
    const productNameSlug = product.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

    const url = `/shop/${gender}/${categoryName}/${categoryId}/${productNameSlug}/${product.id}`;
    return url;
}