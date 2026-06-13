/* ============================================================================
 * 中国创新药精选代表性赛道 · 数据集
 * ----------------------------------------------------------------------------
 * 定位：公开数据的热门靶点演进图谱（科普），非竞争情报或穷尽收录。所有公司一律为中性数据节点。
 * fic 字段 = 跟随↔原创 光谱（0=快速跟随 me-too / fast-follow，1=原创 first-in-class），
 *           是面向科普的编辑性简化，非监管或学术定义。
 * status：获批 | III期 | II期 | I期（公开阶段）
 * 数据来源：NMPA 公开获批信息 / 公司公开公告 / 公开新闻。每条带 source。
 * ========================================================================== */
window.ROAMER_DATA = {
  meta: {
    title: "中国创新药 · 热门靶点演进图谱",
    subtitle: "精选代表性赛道 · fast-follow → first-in-class",
    updated: "2026-06",
    _seed: false
  },
  // 光谱锚点（x 轴说明）
  axis: { left: "快速跟随 · me-too", mid: "差异化跟随 · me-better", right: "原创 · first-in-class" },

  areas: [
    {
      id: "io", name: "肿瘤免疫", en: "Immuno-Oncology",
      tracks: [
        {
          id: "pd1", name: "PD-1 / PD-L1", target: "PD-1 / PD-L1",
          drugs: [
            { name: "特瑞普利单抗", company: "君实生物", modality: "单抗", status: "获批", fic: 0.35, year: 2018, note: "国产 PD-1；2018 年 NMPA 有条件批准用于黑色素瘤。", source: "Junshi 2024 results presentation: https://junshi-bioscience-v2-umb.azurewebsites.net/media/4fvkmvb3/%E5%90%9B%E5%AE%9E%E7%94%9F%E7%89%A92024%E5%B9%B4%E5%B9%B4%E6%8A%A5%E4%B8%9A%E7%BB%A9%E4%BC%9A-en.pdf" },
            { name: "信迪利单抗", company: "信达生物 / 礼来", modality: "单抗", status: "获批", fic: 0.30, year: 2018, note: "国产 PD-1；2018 年 NMPA 批准用于复发/难治性经典型霍奇金淋巴瘤。", source: "Innovent 2018 annual results announcement: https://investor.innoventbio.com/media/1092/annual-results-announcement-for-the-year-ended-31-december-2018-e.pdf" },
            { name: "卡瑞利珠单抗", company: "恒瑞医药", modality: "单抗", status: "获批", fic: 0.32, year: 2019, note: "国产 PD-1；2019 年在中国获批，后续适应症持续扩展。", source: "PubMed review: https://pubmed.ncbi.nlm.nih.gov/31313098/" },
            { name: "替雷利珠单抗", company: "百济神州", modality: "单抗", status: "获批", fic: 0.40, year: 2019, note: "国产 PD-1；Fc 段工程化设计，2019 年在中国首次获批。", source: "BioSpace report: https://www.biospace.com/china-national-medical-products-administration-approves-beigene-s-tislelizumab-for-patients-with-classical-hodgkin-s-lymphoma-who-have-received-at-least-two-prior-therapies" }
          ]
        },
        {
          id: "io-bispec", name: "IO 双抗 / 组合抗体", target: "PD-1×CTLA-4 / PD-1×VEGF / CTLA-4×PD-1",
          drugs: [
            { name: "卡度尼利单抗", company: "康方生物", modality: "双特异性抗体", status: "获批", fic: 0.94, year: 2022, note: "PD-1/CTLA-4 双抗；2022 年 NMPA 批准用于复发或转移性宫颈癌。", source: "Akeso announcement: https://www.akesobio.com/en/media/akeso-news/20220629/" },
            { name: "依沃西单抗", company: "康方生物", modality: "双特异性抗体", status: "获批", fic: 0.96, year: 2024, note: "PD-1/VEGF 双抗；2024 年 NMPA 批准用于 EGFR-TKI 治疗后进展的 EGFR 突变非鳞 NSCLC。", source: "Akeso announcement: https://www.akesobio.com/en/media/akeso-news/240815/" },
            { name: "依派利单抗 + 托沃瑞利单抗", company: "齐鲁制药", modality: "组合抗体", status: "获批", fic: 0.58, year: 2025, note: "CTLA-4 抗体与 PD-1 抗体组合；2025 年 NMPA 批准用于铂类化疗期间或之后进展的复发或难治性宫颈癌。", source: "NMPA news: https://english.nmpa.gov.cn/2025-02/19/c_1073653.htm" }
          ]
        }
      ]
    },
    {
      id: "solid-targeted", name: "实体瘤靶向", en: "Targeted Oncology",
      tracks: [
        {
          id: "egfr", name: "EGFR / EGFR exon20", target: "EGFR",
          drugs: [
            { name: "伏美替尼", company: "艾力斯", modality: "小分子", status: "获批", fic: 0.55, year: 2021, note: "第三代 EGFR-TKI；2021 年在中国获批上市。", source: "Allist announcement: https://www.allist.com.cn/en/newsd/102/46.html" },
            { name: "舒沃替尼", company: "迪哲医药", modality: "小分子", status: "获批", fic: 0.72, year: 2023, note: "EGFR exon20ins 抑制剂；2023 年 NMPA 有条件批准用于含铂化疗后进展 NSCLC。", source: "NMPA news: https://english.nmpa.gov.cn/2023-08/23/c_964025.htm" },
            { name: "利厄替尼", company: "奥赛康 / 信达生物", modality: "小分子", status: "获批", fic: 0.48, year: 2025, note: "第三代 EGFR-TKI；2025 年 NMPA 批准用于 EGFR T790M 突变局部晚期或转移性 NSCLC。", source: "Innovent / ASK Pharm PR: https://www.prnewswire.com/news-releases/innovent-and-ask-pharm-jointly-announce-nmpa-approval-of-limertinib-a-third-generation-egfr-tki-for-the-treatment-of-lung-cancer-302353761.html" }
          ]
        },
        {
          id: "kras-met", name: "KRAS / MET", target: "KRAS G12C / MET",
          drugs: [
            { name: "氟泽雷塞", company: "信达生物", modality: "小分子", status: "获批", fic: 0.42, year: 2024, note: "KRAS G12C 抑制剂；2024 年 NMPA 批准用于既往治疗后 KRAS G12C 突变晚期 NSCLC。", source: "Innovent announcement: https://www.prnewswire.com/news-releases/chinas-first-approved-kras-g12c-inhibitor-innovent-announces-the-approval-of-dupert-fulzerasib-by-the-national-medical-products-administration-of-china-302227453.html" },
            { name: "格索雷塞", company: "益方生物 / 正大天晴", modality: "小分子", status: "获批", fic: 0.45, year: 2024, note: "KRAS G12C 抑制剂；2024 年 NMPA 批准用于既往治疗后 KRAS G12C 突变晚期 NSCLC。", source: "InventisBio announcement: https://www.inventisbio.com/en/2024/11/11/officially-approved-anfangning-kras-g12c-inhibitor-garsorasib-receives-market-authorization-from-the-national-medical-products-administration-nmpa-of-china/" },
            { name: "赛沃替尼", company: "和黄医药 / 阿斯利康", modality: "小分子", status: "获批", fic: 0.85, year: 2021, note: "选择性 MET 抑制剂；2021 年 NMPA 批准用于 MET exon14 跳变 NSCLC。", source: "PubMed review: https://pubmed.ncbi.nlm.nih.gov/34958652/" }
          ]
        }
      ]
    },
    {
      id: "adc", name: "ADC", en: "Antibody-Drug Conjugate",
      tracks: [
        {
          id: "her2-adc", name: "HER2 ADC", target: "HER2",
          drugs: [
            { name: "维迪西妥单抗", company: "荣昌生物", modality: "ADC", status: "获批", fic: 0.75, year: 2021, note: "国产 HER2 ADC；2021 年 NMPA 有条件批准用于 HER2 过表达局部晚期或转移性胃癌。", source: "RemeGen product page: https://www.remegen.com/?cid=93&v=listing" },
            { name: "瑞康曲妥珠单抗", company: "恒瑞医药", modality: "ADC", status: "获批", fic: 0.70, year: 2025, note: "HER2 ADC；2025 年 NMPA 批准用于既往系统治疗后 HER2 突变不可切除局晚或转移性 NSCLC。", source: "PRNewswire / Hengrui announcement: https://www.prnewswire.com/news-releases/chinas-her2-targeted-adc-trastuzumab-rezetecan-gains-nmpa-approval-for-her2-mutant-nsclc-302468141.html" }
          ]
        }
      ]
    },
    {
      id: "heme-cell", name: "血液肿瘤与细胞治疗", en: "Hematology & Cell Therapy",
      tracks: [
        {
          id: "btk", name: "BTK 抑制剂", target: "BTK",
          drugs: [
            { name: "泽布替尼", company: "百济神州", modality: "小分子", status: "获批", fic: 0.75, year: 2020, note: "国产 BTK 抑制剂；2020 年 NMPA 批准用于 CLL/SLL 与 MCL。", source: "WHO application summary: https://cdn.who.int/media/docs/default-source/essential-medicines/2021-eml-expert-committee/applications-for-addition-of-new-medicines/a.39_zanubrutinib_cll_sll.pdf?sfvrsn=7d5a2610_4" },
            { name: "奥布替尼", company: "诺诚健华", modality: "小分子", status: "获批", fic: 0.60, year: 2020, note: "选择性 BTK 抑制剂；2020 年 NMPA 批准用于复发/难治 CLL/SLL 与 MCL。", source: "InnoCare announcement: https://www.innocarepharma.com/en/news/activity/en020231213" }
          ]
        },
        {
          id: "cd19-cart", name: "CD19 CAR-T", target: "CD19",
          drugs: [
            { name: "阿基仑赛", company: "复星凯特", modality: "CAR-T", status: "获批", fic: 0.80, year: 2021, note: "CD19 CAR-T；2021 年获批，为中国首个获批 CAR-T 产品。", source: "Gilead / Kite announcement: https://www.gilead.com/news/news-details/2021/kite-joint-venture---fosun-kite---gains-the-first-car-t-cell-therapy-approval-in-china" },
            { name: "瑞基奥仑赛", company: "药明巨诺", modality: "CAR-T", status: "获批", fic: 0.70, year: 2021, note: "CD19 CAR-T；2021 年 NMPA 批准用于复发或难治性大 B 细胞淋巴瘤。", source: "JW Therapeutics announcement: https://www.prnewswire.com/news-releases/jw-therapeutics-announces-nmpa-approval-of-relmacabtagene-autoleucel-injection-in-china-301369706.html" },
            { name: "纳基奥仑赛", company: "合源生物", modality: "CAR-T", status: "获批", fic: 0.72, year: 2023, note: "CD19 CAR-T；2023 年 NMPA 批准用于复发/难治 B-ALL。", source: "CASI announcement: https://www.prnewswire.com/news-releases/casi-pharmaceuticals-announces-market-approval-of-cnct19-by-china-nmpa-301981482.html" }
          ]
        },
        {
          id: "bcma-cart", name: "BCMA CAR-T", target: "BCMA",
          drugs: [
            { name: "伊基奥仑赛", company: "信达生物 / 驯鹿生物", modality: "CAR-T", status: "获批", fic: 0.75, year: 2023, note: "BCMA CAR-T；2023 年 NMPA 批准用于复发/难治性多发性骨髓瘤。", source: "NMPA news: https://english.nmpa.gov.cn/2023-06/30/c_940315.htm" },
            { name: "泽沃基奥仑赛", company: "科济药业", modality: "CAR-T", status: "获批", fic: 0.78, year: 2024, note: "BCMA CAR-T；2024 年 NMPA 批准用于复发/难治性多发性骨髓瘤。", source: "CARsgen announcement: https://www.carsgen.com/en/news/20240301/" },
            { name: "西达基奥仑赛", company: "传奇生物 / 强生", modality: "CAR-T", status: "获批", fic: 0.95, year: 2025, note: "BCMA CAR-T；2025 年 NMPA 批准在中国上市。", source: "NMPA news: https://english.nmpa.gov.cn/2025-02/19/c_1073597.htm" }
          ]
        }
      ]
    },
    {
      id: "autoimmune", name: "自身免疫", en: "Autoimmune",
      tracks: [
        {
          id: "bcell-axis", name: "B 细胞 / BLyS-APRIL", target: "BLyS / APRIL",
          drugs: [
            { name: "泰它西普", company: "荣昌生物", modality: "融合蛋白", status: "获批", fic: 0.90, year: 2021, note: "BLyS/APRIL 双靶点融合蛋白；2021 年 NMPA 有条件批准用于系统性红斑狼疮。", source: "RemeGen product page: https://www.remegen.com/?cid=93&v=listing" }
          ]
        }
      ]
    },
    {
      id: "metabolic", name: "代谢与心血管", en: "Metabolic & Cardiovascular",
      tracks: [
        {
          id: "glp1", name: "GLP-1 / GCG-GLP-1", target: "GLP-1R / GCGR",
          drugs: [
            { name: "玛仕度肽", company: "信达生物", modality: "多肽", status: "获批", fic: 0.92, year: 2025, note: "GCG/GLP-1 双受体激动剂；2025 年 NMPA 批准用于成人超重或肥胖长期体重管理。", source: "Innovent announcement: https://www.prnewswire.com/news-releases/innovent-announces-mazdutide-first-dual-gcgglp-1-receptor-agonist-received-approval-from-chinas-nmpa-for-chronic-weight-management-302493152.html" },
            { name: "依苏帕格鲁肽α", company: "信迈生物（Sciwind）", modality: "多肽", status: "获批", fic: 0.55, year: 2026, note: "GLP-1 受体激动剂；2026 年 NMPA 批准用于成人 2 型糖尿病。", source: "Sciwind / PRNewswire: https://www.prnewswire.com/apac/news-releases/sciwind-biosciences-announces-ecnoglutide-injection-approved-by-chinas-national-medical-products-administration-nmpa-for-adult-type-2-diabetes-302675016.html" }
          ]
        },
        {
          id: "pcsk9", name: "PCSK9", target: "PCSK9",
          drugs: [
            { name: "托莱西单抗", company: "信达生物", modality: "单抗", status: "获批", fic: 0.65, year: 2023, note: "PCSK9 抗体；2023 年 NMPA 批准用于成人原发性高胆固醇血症和混合型血脂异常。", source: "NMPA news: https://english.nmpa.gov.cn/2023-08/16/c_964024.htm" },
            { name: "瑞卡西单抗", company: "恒瑞医药", modality: "单抗", status: "获批", fic: 0.68, year: 2025, note: "长效 PCSK9 抗体；2025 年 NMPA 批准用于成人原发性高胆固醇血症和混合型血脂异常。", source: "NMPA news: https://english.nmpa.gov.cn/2025-06/11/c_1101534.htm" }
          ]
        }
      ]
    }
  ]
};
