---
layout: home
title: Trang chủ EC-DEV VN
active: home
---
<section class="software_banner_area d-flex align-items-center">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 d-flex align-items-center">
                <div class="software_banner_content">
                    <h2 class="f_500 f_size_50 w_color wow fadeInLeft" data-wow-delay="0.2s">{{ site.data.home.wwaHeading }}</h2>
                    <p class="w_color f_size_18 l_height30 mt_30 wow fadeInLeft" data-wow-delay="0.4s">{{ site.data.home.wwaSubHeading }}</p>
                    <div class="action_btn d-flex align-items-center mt_40 wow fadeInLeft" data-wow-delay="0.6s">
                        <a href="/contact" class="software_banner_btn">{{ site.data.ecdev.startNow }}</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="software_img wow fadeInRight" data-wow-delay="0.2s">
                    <img src="/assets/img/cloud/banner_img.png" alt="">
                </div>
            </div>
        </div>
    </div>
</section>

<section class="saas_service_area sec_pad">
    <div class="container">
        <div class="sec_title text-center mb_70 wow fadeInUp" data-wow-delay="0.2s">
            <h2 class="f_p f_size_30 l_height50 f_600 t_color">{{ site.data.home.wcuHeading }}</h2>
            <p class="f_300 f_size_16">{{ site.data.home.wcuSubHeading }}</p>
        </div>
        <div class="row saas_service_item">
            <div class="col-lg-6">
                <div class="saas_service_img wow fadeInLeft" data-wow-delay="0.3s">
                    <img src="/assets/img/cloud/service_one.png" alt="">
                </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center">
                <div class="saas_service_content pr_100 wow fadeInRight" data-wow-delay="0.4s">
                    <div class="icon icon_one"><i class="ti-control-shuffle"></i></div>
                    <h4 class="f_500 f_p t_color">{{ site.data.home.wcuGrowHeading }}</h4>
                    <p class="f_p f_300">{{ site.data.home.wcuGrowContent }}</p>
                    <a href="/contact" class="gr_btn"><span class="text">{{ site.data.ecdev.startNow }}</span></a>
                </div>
            </div>
        </div>
        <div class="row flex-row-reverse saas_service_item">
            <div class="col-lg-6">
                <div class="saas_service_img wow fadeInRight" data-wow-delay="0.4s">
                    <img src="/assets/img/cloud/Design.png" alt="">
                </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center">
                <div class="saas_service_content pl_100 wow fadeInLeft" data-wow-delay="0.6s">
                    <div class="icon icon_two"><i class="ti-timer"></i></div>
                    <h4 class="f_500 f_p t_color">{{ site.data.home.wcuSaveTimeHeading }}</h4>
                    <div class="job_deatails_content">
                        <ul class="list-unstyled mb-0">
                            {% for item in site.data.home.wcuSaveTimeList %}
                                <li class="mb-2"><i class="ti-arrow-right"></i><span class="main_color">{{item.title}}</span> - {{item.description}}</li>
                            {% endfor %}
                        </ul>
                    </div>
                    <a href="/contact" class="gr_btn"><span class="text">{{ site.data.ecdev.startNow }}</span></a>
                </div>
            </div>
        </div>
        <div class="row saas_service_item">
            <div class="col-lg-6">
                <div class="saas_service_img wow fadeInLeft" data-wow-delay="0.4s">
                    <img src="/assets/img/cloud/enterprice.png" alt="">
                </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center">
                <div class="saas_service_content pr_100 wow fadeInRight" data-wow-delay="0.6s">
                    <div class="icon icon_three"><i class="ti-palette"></i></div>
                    <h4 class="f_500 f_p t_color">{{ site.data.home.wcuFreeDesignHeading }}</h4>
                    <p class="f_p f_300">{{ site.data.home.wcuFreeDesignContent }}</p>
                    <a href="/contact" class="gr_btn"><span class="text">{{ site.data.ecdev.startNow }}</span></a>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="software_featured_area_two sec_pad">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="software_featured_img wow fadeInLeft" data-wow-delay="0.2s">
                    <img class="img-fluid" src="/assets/img/cloud/featured_img1.png" alt="">
                </div>
            </div>
            <div class="col-lg-5 offset-lg-1 d-flex align-items-center pl-0">
                <div class="software_featured_content">
                    <h2 class="f_700 f_size30 l_height_40 w_color f_p mb-30 wow fadeInRight" data-wow-delay="0.2s">{{ site.data.home.gycHeading }}</h2>
                    <p class="w_color f_300 mb_50 wow fadeInRight" data-wow-delay="0.4s">{{ site.data.home.gycContent }}</p>
                    <a href="/eccube" class="btn_hover btn_four wow fadeInRight" data-wow-delay="0.6s">{{ site.data.ecdev.findMore }}</a>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="agency_featured_area bg_color pb-4">
    <div class="container">
        <h2 class="f_size_30 f_600 t_color3 l_height40 text-center wow fadeInUp" data-wow-delay="0.3s">{{ site.data.ecdev.httHeading }}</h2>
        <div class="features_info">
            <img class="dot_img" src="/assets/img/cloud/dot.png" alt="">
            <div class="row agency_featured_item flex-row-reverse">
                <div class="col-lg-6">
                    <div class="agency_featured_img text-right wow fadeInRight" data-wow-delay="0.4s">
                        <img src="/assets/img/cloud/work1.png" alt="">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="agency_featured_content pr_70 pl_70 wow fadeInLeft" data-wow-delay="0.6s">
                        <div class="dot"><span class="dot1"></span><span class="dot2"></span></div>
                        <img class="number" src="/assets/img/cloud/icon01.png" alt="">
                        <h3><span class="text-primary">{{ site.data.home.httContentRequestHeading }}</span></h3>
                        <div class="htt-content">
                            {{ site.data.home.httContentRequestContent }}
                        </div>
                        <a href="/contact" class="icon mt_30"><i class="ti-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="row agency_featured_item agency_featured_item_two">
                <div class="col-lg-6">
                    <div class="agency_featured_img text-right wow fadeInLeft" data-wow-delay="0.3s">
                        <img src="/assets/img/cloud/work2.png" alt="">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="agency_featured_content pl_100 wow fadeInRight" data-wow-delay="0.5s">
                        <div class="dot"><span class="dot1"></span><span class="dot2"></span></div>
                        <img class="number" src="/assets/img/cloud/icon02.png" alt="">
                        <h3><span class="text-primary">{{ site.data.home.httProcessInfoHeading }}</span></h3>
                        <div class="htt-content">
                            {{ site.data.home.httProcessInfoContent }}
                        </div>
                        <a href="/contact" class="icon mt_30"><i class="ti-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="row agency_featured_item flex-row-reverse">
                <div class="col-lg-6">
                    <div class="agency_featured_img text-right wow fadeInRight" data-wow-delay="0.3s">
                        <img src="/assets/img/cloud/work3.png" alt="">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="agency_featured_content pr_70 pl_70 wow fadeInLeft" data-wow-delay="0.5s">
                        <div class="dot"><span class="dot1"></span><span class="dot2"></span></div>
                        <img class="number" src="/assets/img/cloud/icon3.png" alt="">
                        <h3><span class="text-primary">{{ site.data.home.httStartNowHeading }}</span></h3>
                        <div class="htt-content">
                            {{ site.data.home.httStartNowContent }}
                        </div>
                        <div class="job_deatails_content pb-0">
                            <ul class="list-unstyled mb-0">
                                {% for item in site.data.home.wcuSaveTimeList %}
                                    <li class="mb-2"><i class="ti-arrow-right"></i><span class="main_color">{{item.title}}</span> - {{item.description}}</li>
                                {% endfor %}
                            </ul>
                        </div>
                        <a href="/contact" class="btn_hover agency_banner_btn mt_30">{{ site.data.ecdev.startNow }} {{ site.data.ecdev.today }}</a>
                    </div>
                </div>
            </div>
            <div class="dot middle_dot"><span class="dot1"></span><span class="dot2"></span></div>
        </div>
    </div>
</section>

<section class="action_area_two mb_90">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 d-flex align-items-center">
                <div class="action_content">
                    <h2 class="f_600 f_size_30 l_height45 t_color3 mb-0 wow fadeInLeft" data-wow-delay="0.3s">{{ site.data.home.httBottomHeading }}</h2>
                    <a href="#" class="btn_three btn_hover agency_banner_btn wow fadeInLeft" data-wow-delay="0.5s">{{ site.data.ecdev.contactNow }}</a>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="action_img wow fadeInRight" data-wow-delay="0.5s">
                    <img src="/assets/img/action_image.png" alt="">
                </div>
            </div>
        </div>
    </div>
</section>