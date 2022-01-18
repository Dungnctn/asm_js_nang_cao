import Footer from "../compernents/footer";
import Header from "../compernents/header";
import HeadContent from "./headcontent";
import PopularProduct from "./popu_pro";

const Product = {
    render() {
        return /*html*/ `
        <div class="container">
            ${Header.render()}
                <nav aria-label="Breadcrumb">
                <ol role="list" class="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                    <li>
                    <div class="flex items-center">
                        <a href="/" class="mr-2 text-sm font-medium text-gray-900">
                        Trang chủ
                        </a>
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                        </svg>
                    </div>
                    </li>

                    <li>
                    <div class="flex items-center">
                        <a href="#" class="mr-2 text-sm font-medium text-gray-900">
                        Sản phẩm
                        </a>
                    </div>
                    </li>
                </ol>
                </nav>
            ${PopularProduct.render()}
            ${HeadContent.render()}
            ${Footer.render()}
        </div>
        
        `
    }

}

export default Product;