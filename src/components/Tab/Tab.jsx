import ReadBooks from "../ReadBooks/ReadBooks";
import WishListBooks from "../WishListBooks/WishListBooks";

const Tab = () => {
    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <ReadBooks/>
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Wishlist Books"
                    defaultChecked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <WishListBooks/>
                </div>
            </div>
        </div>
    );
};

export default Tab;