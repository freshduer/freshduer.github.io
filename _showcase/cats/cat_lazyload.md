---
show: true
width: 3
date: 2019-01-12 00:01:00 +0800
group: Cats
---
<div>
    {% assign profile_img = site.data.profile.portraits[0].url | default: site.data.profile.portrait_url %}
    <img data-src="{{ profile_img | relative_url }}" class="lazy w-100 rounded" src="{{ '/assets/images/empty_300x200.png' | relative_url }}">
</div>

