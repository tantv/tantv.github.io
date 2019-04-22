---
layout: default
title: Kho giao diện
permalink: /themes/
active: themes
defaultImg: /assets/img/ecdev-logo.png
---

<section class="breadcrumb_area">
    <img class="breadcrumb_shap" src="/assets/img/banner_bg.png" alt="">
    <div class="container">
        <div class="breadcrumb_content text-center">
            <h1 class="f_p f_700 f_size_50 w_color l_height50 mb_20">Kho giao diện dành cho website bán hàng</h1>
            <p class="f_300 w_color f_size_16 l_height26 w-75 mx-auto">Nhiều EC-CUBE Themes đẹp, miễn phí, giá rẻ, tối ưu trên di động, máy tính với nhiều màu sắc, bố cục khác nhau.<br>
            Các mẫu website bán hàng chuẩn SEO, được kiểm soát bởi đội ngũ EC-DEV VN, để đảm bảo người dùng có trải nghiệm tốt nhất giúp bạn bán hàng hiệu quả hơn bao giờ hết.</p>
        </div>
    </div>
</section>

<section class="shop_grid_area sec_pad pt-5">
    <div class="container">
        <div class="row">
            {% for theme in site.data.themes %}
            <div class="col-lg-3 col-sm-4">
                <div class="single_product_item">
                    <div class="product_img">
                        {% if theme.image %}
                            <img class="img-fluid border border-light" src="{{theme.image}}" alt="">
                        {% else %}
                            <img class="img-fluid border border-light" src="{{page.defaultImg}}" alt="">
                        {% endif %}
                        <div class="hover_content">
                            <a href="#"><i class="ti-heart"></i></a>
                            <a href="#" title="Add to cart"><i class="ti-bag"></i></a>
                            <a href="#"><i class="ti-eye"></i></a>
                        </div>
                    </div>
                    <div class="single_pr_details">
                        <a href="#">
                            <h3 class="f_p f_500 f_size_16">{{theme.name}}</h3>
                        </a>
                        <div class="price">
                            {% if theme.sale %}
                                <del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>{{theme.price}}</span></del> 
                                <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>{{theme.sale}}</span></ins> 
                            {% else %}
                                <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>{{theme.price}}</span></ins> 
                            {% endif %} 
                        </div>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>
