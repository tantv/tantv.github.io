---
layout: default
title: Các câu hỏi thường gặp
permalink: /faq/
active: faq
---

<section class="breadcrumb_area">
    <img class="breadcrumb_shap" src="/assets/img/banner_bg.png" alt="">
    <div class="container">
        <div class="breadcrumb_content text-center">
            <h1 class="f_p f_700 f_size_50 w_color l_height50 mb_20">Những vấn đề thường gặp</h1>
            <p class="f_300 w_color f_size_16 l_height26 w-50 mx-auto">Nếu bạn không tìm thấy những thông tin hữu ích ở đây hoặc không đầy đủ thông tin để giải quyết vấn đề của bạn, đừng e ngại liên hệ ngay với <a href="/contact" title="Liên hệ chúng tôi"><b>chúng tôi</b></a></p>
        </div>
    </div>
</section>

<section class="faq_area sec_pad">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 pr_50">
                <div class="faq_tab">
                    {% include faq/tab_menu.html %}
                </div>
            </div>
            <div class="col-lg-8">
                <div class="tab-content faq_content" id="myTabContent">
                    {% include faq/tab_forwho.html %}
                    {% include faq/tab_eccube.html %}
                    {% include faq/tab_requirement.html %}
                    {% include faq/tab_feature.html %}
                    {% include faq/tab_buildstore.html %}
                </div>
            </div>
        </div>
    </div>
</section>
