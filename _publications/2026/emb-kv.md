---
#title:          "When Embedding Matters? Dynamic KV–Embedding Memory Allocation for Accelerating Generative Recommender Inference"
title:          "One Pool, Two Caches: Adaptive HBM Partitioning for Accelerating
Generative Recommender Serving"
date:           2026-11-08 00:00:00 +0800
selected:       true
pub:            "(<strong>PrePrint 2026</strong>) "
pub_post:       'Under review'
# pub_date:       "2026"
pub_ab:         "PrePrint"

abstract: >- 
  Generative Recommender inference faces a dual memory bottleneck absent in LLM serving: embedding hot caches and KV caches compete for the same limited GPU HBM, yet existing systems optimize them in isolation. We present HELM, which jointly reallocates HBM between the two caches at runtime and routes requests via a joint EMB–KV-aware scheduler, reducing P99 latency by 24–38% while maintaining ≥93.5% SLO satisfaction across production workload regimes.
  

cover:          /assets/images/publications/EMB-KV.png
authors:
  - Wenjun Yu
  - Amelie Chi Zhou
  - Shuguang Han — Alibaba (XianYu)

links:
#   Paper: https://arxiv.org/pdf/2512.12295
  # Project: https://onethousandwu.com/3DPortraitGAN.github.io/
  # Code: https://github.com/oneThousand1000/3DPortraitGAN
  # Supplementary: https://drive.google.com/file/d/16aNE5USZ0U32bgGJS1G5xWrY0oIMTfre/view?usp=sharing
--- 