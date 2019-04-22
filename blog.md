---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: blog
title: Cập nhật các thông tin và sự kiện mới nhất
permalink: /blog/
active: blog
---

{% for post in site.posts %}
  <div class="blog_list_item mb_50">
      <img class="img-fluid" src="{{post.image}}" alt="">
      <div class="blog_content">
          <div class="post_date">
              <h2>{{ post.date | date: '%d' }} <span>{{ post.date | date: '%B' }}</span></h2>
          </div>
          <a href="{{ post.url }}"><h5 class="f_p f_size_20 f_500 t_color mb_20 mt-3">{{ post.title }}</h5></a>
          <p class="f_300 mb_20">{{ post.excerpt }}</p>
          <a href="{{ post.url }}" class="learn_btn_two">Xem thêm <i class="ti-arrow-right"></i></a>
      </div>
  </div>
{% endfor %}