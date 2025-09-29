import { useForm } from "react-hook-form";
import { addAddress, editAddress } from "../store/thunks/clientThunks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function AddressForm({address}) {

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({defaultValues: {
        title: "",
        name: "",
        surname: "",
        city: "",
        district: "",
        neighborhood: "",
        address: "",
    }, mode: "onTouched", reValidateMode: "onChange", shouldUnregister: true});

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        if(address) {
            const payload = {...data, id: address.id};
            dispatch(editAddress(payload));
        } else {
            dispatch(addAddress(data));
        }
    }

    useEffect(() => {
        if(address) {
            reset(address);
        } else {
            reset();
        }
    }, [address, reset]);

    return (
        <section className="address-form-main flex flex-col items-center gap-5 mt-10">
            <div className="form-title flex items-start">
                <h2 className="text-[#252B42] text-2xl font-bold leading-[3.125rem] text-center">Create New Address</h2>
            </div>
            <div className="address-form">
                <form className="flex flex-col gap-2 md:gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="address-title flex flex-col">
                        <label htmlFor="title" className="text-lg leading-6">Title</label>
                        <input {...register("title", {required: "Please enter a title", maxLength: {value: 10, message: "Title cannot be longer than 10 characters."}})} id="title" name="title" type="text" placeholder="Home" className=" bg-gray-50 border rounded-[5px] w-[20rem] h-[2.5rem] md:w-[25rem]"/>
                        {errors.title && (
                                <p className="w-2xs text-red-500 text-sm py-3">{errors.title.message}</p>
                            )}
                    </div>
                    <div className="address-fullname flex md:flex-col gap-4">
                        <div className="address-name flex flex-col">
                            <label htmlFor="name" className="text-lg leading-6">Name</label>
                            <input {...register("name", {required: "Please enter a name", minLength: {value: 3, message: "Name must be at least 3 characters long."},
                                maxLength: {value: 20, message: "Name cannot be longer than 20 characters."}})} id="name" name="name" type="text" placeholder="John" className=" bg-gray-50 border rounded-[5px] w-[9.5rem] h-[2.5rem] md:w-[25rem]"/>
                            {errors.name && (
                                <p className="w-2xs text-red-500 text-sm py-3">{errors.name.message}</p>
                            )}
                        </div>
                        <div className="address-surname flex flex-col">
                            <label htmlFor="surname" className="text-lg leading-6">Surname</label>
                            <input {...register("surname", {required: "Please enter a surname", minLength: {value: 3, message: "Name must be at least 3 characters long."},
                                maxLength: {value: 20, message: "Name cannot be longer than 20 characters."}})} id="surname" name="surname" type="text" placeholder="Doe" className=" bg-gray-50 border rounded-[5px] w-[9.5rem] h-[2.5rem] md:w-[25rem]"/>
                            {errors.surname && (
                                <p className="w-2xs text-red-500 text-sm py-3">{errors.surname.message}</p>
                            )}
                        </div>
                    </div>
                    <div className="address-phone flex flex-col">
                        <label htmlFor="phone" className="text-lg leading-6">Phone</label>
                        <input {...register("phone", {required: "Please enter a phone number",
                            pattern: {
                                value: /^\d{11}$/,
                                message: "Phone must be a 11-digit number."
                            }
                        })} id="phone" name="phone" type="text" placeholder="01234567891" className=" bg-gray-50 border rounded-[5px] w-[20rem] h-[2.5rem] md:w-[25rem]"/>
                        {errors.phone && (
                                <p className="w-2xs text-red-500 text-sm py-3">{errors.phone.message}</p>
                            )}
                    </div>
                    <div className="address-city flex flex-col">
                        <label htmlFor="city" className="text-lg leading-6">City</label>
                        <select {...register("city", {required: "Please select a city"})} id="city" name="city" className=" bg-gray-50 border rounded-[5px] w-[20rem] h-[2.5rem] md:w-[25rem]">
                            <option value="İstanbul">İstanbul</option>
                            <option value="Ankara">Ankara</option>
                            <option value="İzmir">İzmir</option>
                            <option value="Adana">Adana</option>
                            <option value="Adıyaman">Adıyaman</option>
                            <option value="Afyonkarahisar">Afyonkarahisar</option>
                            <option value="Ağrı">Ağrı</option>
                            <option value="Aksaray">Aksaray</option>
                            <option value="Amasya">Amasya</option>
                            <option value="Antalya">Antalya</option>
                            <option value="Ardahan">Ardahan</option>
                            <option value="Artvin">Artvin</option>
                            <option value="Aydın">Aydın</option>
                            <option value="Balıkesir">Balıkesir</option>
                            <option value="Bartın">Bartın</option>
                            <option value="Batman">Batman</option>
                            <option value="Bayburt">Bayburt</option>
                            <option value="Bilecik">Bilecik</option>
                            <option value="Bingöl">Bingöl</option>
                            <option value="Bitlis">Bitlis</option>
                            <option value="Bolu">Bolu</option>
                            <option value="Burdur">Burdur</option>
                            <option value="Bursa">Bursa</option>
                            <option value="Çanakkale">Çanakkale</option>
                            <option value="Çankırı">Çankırı</option>
                            <option value="Çorum">Çorum</option>
                            <option value="Denizli">Denizli</option>
                            <option value="Diyarbakır">Diyarbakır</option>
                            <option value="Düzce">Düzce</option>
                            <option value="Edirne">Edirne</option>
                            <option value="Elazığ">Elazığ</option>
                            <option value="Erzincan">Erzincan</option>
                            <option value="Erzurum">Erzurum</option>
                            <option value="Eskişehir">Eskişehir</option>
                            <option value="Gaziantep">Gaziantep</option>
                            <option value="Giresun">Giresun</option>
                            <option value="Gümüşhane">Gümüşhane</option>
                            <option value="Hakkâri">Hakkâri</option>
                            <option value="Hatay">Hatay</option>
                            <option value="Iğdır">Iğdır</option>
                            <option value="Isparta">Isparta</option>
                            <option value="Kahramanmaraş">Kahramanmaraş</option>
                            <option value="Karabük">Karabük</option>
                            <option value="Karaman">Karaman</option>
                            <option value="Kars">Kars</option>
                            <option value="Kastamonu">Kastamonu</option>
                            <option value="Kayseri">Kayseri</option>
                            <option value="Kırıkkale">Kırıkkale</option>
                            <option value="Kırklareli">Kırklareli</option>
                            <option value="Kırşehir">Kırşehir</option>
                            <option value="Kilis">Kilis</option>
                            <option value="Kocaeli">Kocaeli</option>
                            <option value="Konya">Konya</option>
                            <option value="Kütahya">Kütahya</option>
                            <option value="Malatya">Malatya</option>
                            <option value="Manisa">Manisa</option>
                            <option value="Mardin">Mardin</option>
                            <option value="Mersin">Mersin</option>
                            <option value="Muğla">Muğla</option>
                            <option value="Muş">Muş</option>
                            <option value="Nevşehir">Nevşehir</option>
                            <option value="Niğde">Niğde</option>
                            <option value="Ordu">Ordu</option>
                            <option value="Osmaniye">Osmaniye</option>
                            <option value="Rize">Rize</option>
                            <option value="Sakarya">Sakarya</option>
                            <option value="Samsun">Samsun</option>
                            <option value="Siirt">Siirt</option>
                            <option value="Sinop">Sinop</option>
                            <option value="Sivas">Sivas</option>
                            <option value="Şırnak">Şırnak</option>
                            <option value="Tekirdağ">Tekirdağ</option>
                            <option value="Tokat">Tokat</option>
                            <option value="Trabzon">Trabzon</option>
                            <option value="Tunceli">Tunceli</option>
                            <option value="Şanlıurfa">Şanlıurfa</option>
                            <option value="Uşak">Uşak</option>
                            <option value="Van">Van</option>
                            <option value="Yalova">Yalova</option>
                            <option value="Yozgat">Yozgat</option>
                            <option value="Zonguldak">Zonguldak</option>
                        </select>
                    </div>
                    <div className="address-district flex flex-col">
                        <label htmlFor="district" className="text-lg leading-6">District</label>
                        <input {...register("district", {required: "Please enter a district", maxLength: {value: 30, message: "District cannot be longer than 30 characters."}})} id="district" name="district" type="text" placeholder="Kadıköy" className=" bg-gray-50 border rounded-[5px] w-[20rem] h-[2.5rem] md:w-[25rem]"/>
                        {errors.district && (
                                <p className="w-2xs text-red-500 text-sm py-3">{errors.district.message}</p>
                            )}
                    </div>
                    <div className="address-neighborhood flex flex-col">
                        <label htmlFor="neighborhood" className="text-lg leading-6">Neighborhood</label>
                        <input {...register("neighborhood", {required: "Please enter a neighborhood", maxLength: {value: 30, message: "Neighborhood cannot be longer than 30 characters."}})} id="neighborhood" name="neighborhood" type="text" placeholder="Haydarpaşa" className=" bg-gray-50 border rounded-[5px] w-[20rem] h-[2.5rem] md:w-[25rem]"/>
                        {errors.neighborhood && (
                                <p className="w-2xs text-red-500 text-sm py-3">{errors.neighborhood.message}</p>
                            )}
                    </div>
                    <div className="address-address flex flex-col">
                        <label htmlFor="address" className="text-lg leading-6">Address</label>
                        <textarea {...register("address", {required: "Please enter a address", maxLength: {value: 50, message: "Address cannot be longer than 30 characters."}})} id="address" name="address" type="text" rows="2" placeholder="Address" className=" bg-gray-50 border rounded-[5px] w-[20rem] md:w-[25rem] resize-none"/>
                        {errors.address && (
                                <p className="w-2xs text-red-500 text-sm py-3">{errors.address.message}</p>
                            )}
                    </div>
                    <div className="address-button">
                        <button className="bg-[#23A6F0] disabled:bg-blue-300 disabled:hover:cursor-not-allowed text-white p-1.5 rounded w-[7rem] h-[3rem] hover:cursor-pointer text-center flex items-center justify-center md:w-[9rem] md:h-[4rem]" disabled={!isValid}>{address ? "Edit Address" : "Create Address"}</button>
                    </div>
                </form>
            </div>
        </section>
    );
}