---
layout: default
title: Liên hệ chúng tôi
permalink: /contact/
---

<section class="breadcrumb_area">
    <img class="breadcrumb_shap" src="/assets/img/banner_bg.png" alt="">
    <div class="container">
        <div class="breadcrumb_content text-center">
            <h1 class="f_p f_700 f_size_50 w_color l_height50 mb_20">Liên hệ chúng tôi</h1>
        </div>
    </div>
</section>

<section class="contact_info_area sec_pad">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 pr-0">
                <div class="contact_info_item">
                    <h6 class="f_p f_size_20 t_color3 f_500 mb_20">Địa chỉ văn phòng</h6>
                    <p class="f_300 f_size_15">{{ site.data.ecdev.address }}</p>
                </div>
                <div class="contact_info_item">
                    <h6 class="f_p f_size_20 t_color3 f_500 mb_20">Thông tin liên hệ</h6>
                    <p class="f_300 f_size_15"><span class="f_400 t_color3">Điện thoại:</span> <a href="#">{{ site.data.ecdev.phone }}</a></p>
                    <p class="f_300 f_size_15"><span class="f_400 t_color3">Email:</span> <a href="mailto:{{ site.data.ecdev.email }}">{{ site.data.ecdev.email }}</a></p>
                </div>
            </div>
            <div class="col-lg-8 offset-lg-1">
                <div class="mapbox">
                    <iframe width="100%" height="380" id="gmap_canvas" src="{{ site.data.ecdev.ggAddress }}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
        </div>
        <div class="contact_form">
            <script type="text/javascript">var submitted=false;</script>
            <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" 
            onload="if(submitted) {window.location='/';}"></iframe>
            <h2 class="f_p f_size_22 t_color3 f_600 l_height28 mt_100 mb_40">Gởi yêu cầu</h2>
            <form action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSfO7B6Ss9QeFOYJmdCaPbXdk6twobHu9pwg5goKBHZP_WoVHg/formResponse" class="contact_form_box" method="post" id="contactForm" target="hidden_iframe" onsubmit="submitted=true;">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group text_box">
                            <input required type="text" id="name" name="entry.2005620554" placeholder="Tên của bạn (bắt buộc)">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group text_box">
                            <input required type="text" id="phone" name="entry.1166974658" placeholder="Số điện thoại (bắt buộc)">
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="form-group text_box">
                            <input required type="text" name="entry.1045781291" id="email" placeholder="Địa chỉ Email (bắt buộc)">
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="form-group text_box">
                            <textarea required name="entry.839337160" id="message" cols="30" rows="10" placeholder="Câu hỏi của bạn . . ."></textarea>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn_three">Gởi</button>
            </form>
        </div>
    </div>
</section>