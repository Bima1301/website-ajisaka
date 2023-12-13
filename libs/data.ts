import LampIcon from "@/app/aboutUs/components/icons/LampIcon";
import NetworkIcon from "@/app/aboutUs/components/icons/NetworkIcon";
import PaperIcon from "@/app/aboutUs/components/icons/PaperIcon";
import RupiahIcon from "@/app/aboutUs/components/icons/RupiahIcon";
import SpeakerIcon from "@/app/aboutUs/components/icons/SpeakerIcon";
import UserIcon from "@/app/aboutUs/components/icons/UserIcon";
export const links = [
    {
        name: "Home",
        hash: "home",
        href: "/",
        offset: 0
    },
    {
        name: "About Us",
        hash: "aboutUs",
        href: "/aboutUs",
        offset: 0
    },
    {
        name: "Competition",
        hash: "competition",
        href: "/competition",
        offset: 0
    },
    {
        name: "Lensa Ajisaka",
        hash: "lensaAjisaka",
        href: "/lensaAjisaka",
        offset: 0
    },
    {
        name: "FAQ",
        hash: "faq",
        href: "/faq",
        offset: 0
    },

] as const;

export const timeline = [
    {
        title: "PRE-EVENT",
        name: "JANAMEJAYA",
        date: 'JUMAT | 1 DESEMBER 2023'
    },
    {
        name: "ROADSHOW",
        date: '5-8 DESEMBER 2023  |  3 - 7 JANUARI 2024',
    },
    {
        title: "Kompetisi",
        name: "Pengumpulan Karya",
        date: '1 Januari - 1 Februari 2024'
    },
    {
        name: "Periode  Penjurian",
        date: "2 - 20 Februari 2024"
    },
]

export const candradimukaTimeline = [
    {
        title: "Pembukaan",
        date: "21 Maret 2024"
    },
    {
        title: "Pameran Karya",
        date: "22-24 Maret 2024"
    },
    {
        title: "Malam Puncak",
        date: "24 Maret 2024"
    }
]

export const competition = [
    {
        title: "Sadewa",
        subtitle: "Sayembara Dewa Pariwara",
        icon: "/images/competition/compSadewa.png",
        img: "/images/ourCompetition/sadewa.png",
        des: "Sayembara Dewa Pariwara (Sadewa) merupakan mata lomba Festival Ajisaka UGM 2024 pada bidang periklanan yang mengangkat sub-tema Finding Balance: Between Human Prosperity and Wildlife. Insan Kreatif dapat menuangkan inovasi dan kreativitasnya melalui kategori lomba Skip Ads. Skip Ads mengajak Insan Kreatif untuk membuat Video Ads yang nantinya akan ditayangkan sebagai Skippable Ads pada platform YouTube. Dengan audiens yang bisa melewati iklan setelah lima detik pertama, Insan Kreatif ditantang untuk membuat iklan yang bisa menangkap atensi audiens.",
        category: "Skip Ads",
        registrationLink: "/",
        guidebookLink: "/",
    },
    {
        title: "Prahasta",
        subtitle: "Pertarungan Humas Nusantara",
        icon: "/images/competition/compPrahasta.png",
        img: "/images/ourCompetition/prahasta.png",
        des: "Pertarungan Humas Nusantara (Prahasta) merupakan salah satu cabang lomba di Festival Ajisaka UGM 2024 yang berfokus pada bidang kehumasan. Cabang lomba Prahasta dikemas dalam bentuk lomba PR Campaign atau kampanye kehumasan yang mengajak Insan Kreatif untuk memberikan kontribusinya dalam menyelesaikan permasalahan kehumasan. Insan Kreatif akan ditantang untuk mengeluarkan gagasan-gagasan kreatif dalam menentukan strategi dan media komunikasi yang tepat dan efektif untuk mencapai tujuan dari kampanye dalam sub-tema Protect the Sea, Protect the Biodiversity.",
        category: "PR Campaign",
        registrationLink: "/",
        guidebookLink: "/",
    },
    {
        title: "Kresna",
        subtitle: "Kreasi Insan Sinema",
        icon: "/images/competition/compKresna.png",
        img: "/images/ourCompetition/kresna.png",
        des: "Kreasi Insan Sinema merupakan salah satu mata lomba di Festival Ajisaka UGM 2024 yang berfokus pada bidang perfilman. Kresna memberikan ruang kepada para Insan Kreatif perfilman dalam sub-tema Mother Nature is Calling: Capturing Wildlife at Stake. Insan Kreatif ditantang untuk menuangkan ide-ide baru yang inovatif melalui gambaran industri film dalam kategori lomba Film Dokumenter. Sineas diberikan kebebasan dalam eksplorasi ide dan penyampaian makna atau pesan, tetapi data dan riset tetap diperlukan sebagai dasar pembuatan karya agar esensi film dokumenter sebagai karya yang faktual tetap terjaga.",
        category: "Film Dokumenter",
        registrationLink: "/",
        guidebookLink: "/",
    },
    {
        title: "Nakula",
        subtitle: "Penelitian Kawula Muda",
        icon: "/images/competition/compNakula.png",
        img: "/images/ourCompetition/nakula.png",
        des: "Penelitian Kawula Muda merupakan cabang lomba di Festival Ajisaka yang berfokus pada bidang penelitian. Mata lomba Nakula pada Festival Ajisaka UGM 2024 ini adalah Riset Populer. Melalui mata lomba tersebut, Insan Kreatif diharapkan dapat menemukan berbagai inovasi dari sub-tema Terrestrial Wildlife Habitat Conservation: Media Roles, Challenges, and Opportunities. Nakula memberikan kesempatan kepada Insan Kreatif untuk berkompetisi dalam satu kategori lomba, yaitu Riset Populer. Kategori ini membebaskan Insan Kreatif untuk menemukan solusi dari permasalahan yang terjadi dengan mengutamakan unsur kreativitas dan humor. Dengan tetap berpegang pada metode penelitian ilmiah, tujuan dari riset ini adalah memperoleh solusi permasalahan dengan solusi yang ringan dan kreatif.",
        category: "Riset Populer",
        registrationLink: "/",
        guidebookLink: "/",
    },
    {
        title: "Arjuna",
        subtitle: "Ajang Citra Sejuta Warna",
        icon: "/images/competition/compArjuna.png",
        img: "/images/ourCompetition/arjuna.png",
        des: "Ajang Citra Sejuta Warna merupakan mata lomba Festival Ajisaka UGM 2024 yang berfokus pada bidang jurnalistik, yakni lomba Podcast. Melalui kategori lomba tersebut, Insan Kreatif ditantang untuk memberikan ide kreatif serta keterampilan mereka dalam membuat siniar terkait permasalahan yang diangkat dengan mengedepankan kebenaran sebagai elemen jurnalistik. Kategori lomba Podcast mengajak Insan Kreatif untuk menyampaikan informasi jurnalistik berupa audio dalam durasi tertentu. Melalui kategori Podcast ini, diharapkan Insan Kreatif mampu menyampaikan informasi yang edukatif dan inovatif dengan mengangkat sub-tema Into the Forest: Save the Home of the Wildlife.",
        category: "Podcast",
        registrationLink: "/",
        guidebookLink: "/",
    },
    {
        title: "Dewi Sinta",
        subtitle: "Parade Wirausaha Komunikasi Nusantara",
        icon: null,
        img: "/images/ourCompetition/dewiSinta.png",
        des: "Parade Wirausaha Komunikasi Nusantara merupakan salah satu mata lomba dari Festival Ajisaka UGM 2024. Berangkat dari tema besar Festival Ajisaka UGM 2024, Samarthya Bhumi, Dewi Sinta diharapkan dapat memberikan kesempatan kepada Insan Kreatif untuk menyampaikan ide dan pandangan mereka dalam bidang bisnis yang mengangkat sub-tema Green Messaging: Innovation in Environmental Conservation and Sustainability. Mata lomba Dewi Sinta menantang Insan Kreatif melalui satu kategori lomba, yaitu Business Model. Kategori lomba Business Model mengajak Insan Kreatif untuk mengkreasikan sebuah bisnis baik dalam bentuk produk maupun jasa  yang dapat menunjang output dari tema besar. Peserta akan diminta untuk menjabarkan ide bisnis mereka lewat Proposal Business Model Canvas.",
        category: "Business Model Canvas",
        registrationLink: "/",
        guidebookLink: "/",
    },
]

export const ajisakaLens = [
    {
        img: '/images/lensaAjisaka/lens (1).jpg',
        alt: 'Lensa Ajisaka'
    },
    {
        img: '/images/lensaAjisaka/lens (2).jpg',
        alt: 'Lensa Ajisaka'
    },
    {
        img: '/images/lensaAjisaka/lens (3).jpg',
        alt: 'Lensa Ajisaka'
    },
    {
        img: '/images/lensaAjisaka/lens (4).jpg',
        alt: 'Lensa Ajisaka'
    },
    {
        img: '/images/lensaAjisaka/lens (5).jpg',
        alt: 'Lensa Ajisaka'
    },
    {
        img: '/images/lensaAjisaka/lens (6).jpg',
        alt: 'Lensa Ajisaka'
    },
    {
        img: '/images/lensaAjisaka/lens (7).jpg',
        alt: 'Lensa Ajisaka'
    },
    {
        img: '/images/lensaAjisaka/lens (8).jpg',
        alt: 'Lensa Ajisaka'
    },
    {
        img: '/images/lensaAjisaka/lens (9).jpg',
        alt: 'Lensa Ajisaka'
    },
    {
        img: '/images/lensaAjisaka/lens (10).jpg',
        alt: 'Lensa Ajisaka'
    },
    {
        img: '/images/lensaAjisaka/lens (11).jpg',
        alt: 'Lensa Ajisaka'
    },
    {
        img: '/images/lensaAjisaka/lens (12).jpg',
        alt: 'Lensa Ajisaka'
    },
    {
        img: '/images/lensaAjisaka/lens (13).jpg',
        alt: 'Lensa Ajisaka'
    },
    {
        img: '/images/lensaAjisaka/lens (14).jpg',
        alt: 'Lensa Ajisaka'
    },
    {
        img: '/images/lensaAjisaka/lens (15).jpg',
        alt: 'Lensa Ajisaka'
    },
    {
        img: '/images/lensaAjisaka/lens (16).jpg',
        alt: 'Lensa Ajisaka'
    },
    {
        img: '/images/lensaAjisaka/lens (17).jpg',
        alt: 'Lensa Ajisaka'
    },
]

export const mediaPartner = [
    {
        img: "/images/mediaPartner/ugm.png",
        alt: "UGM"
    },
    {
        img: "/images/mediaPartner/mading.png",
        alt: "Mading Event"
    },
    {
        img: "/images/mediaPartner/ilkom.png",
        alt: "HIMA ILKOM"
    },
    {
        img: "/images/mediaPartner/lakoona.png",
        alt: "Media Partner"
    },
    {
        img: "/images/mediaPartner/fisipUb.png",
        alt: "BEM FISIP UB"
    },
    {
        img: "/images/mediaPartner/fisipUns.png",
        alt: "FISIP UNS"
    },
    {
        img: "/images/mediaPartner/bemUnpad.png",
        alt: "BEM UNPAD"
    }
]

export const ajisakaValues = [
    {
        icon: NetworkIcon,
        text: "Jaringan kerja dengan Insan Kreatif di seluruh Indonesia"
    },
    {
        icon: UserIcon,
        text: "Jaringan kerja dengan tenaga profesional di bidang komunikasi"
    },
    {
        icon: RupiahIcon,
        text: "Penawaran hadiah hingga jutaan rupiah untuk para Jawara"
    },
    {
        icon: LampIcon,
        text: "Ajang untuk berkreasi dan berekspresi"
    },
    {
        icon: SpeakerIcon,
        text: "Paparan brand dari seluruh peserta dan panitia"
    },
    {
        icon: PaperIcon,
        text: "Brief lomba berdasarkan kasus riil industri komunikasi"
    }
]

export const journey = [
    {
        img: '/images/journey/2018.png',
        title: "Ajisaka 2018",
        text: "Mengangkat tema 'Mentas Sesarengan: Mendobrak Batas' yang menekankan pada masalah kemajemukan dan intoleransi yang terjadi di Indonesia"
    },
    {
        img: '/images/journey/2019.png',
        title: "Ajisaka 2019",
        text: "Sesuai dengan tema yang diangkat, 'Abhipraya Darani: Meluak Plastik', Ajisaka 2019 mengajak Insan Kreatif untuk membuat bumi menjadi tempat yang lebih baik."
    },
    {
        img: '/images/journey/2020.png',
        title: "Ajisaka 2020+",
        text: "Selaras dengan tema 'Biwara Bumandala: Berita Baik untuk Bumi', tema ini bertujuan untuk menanamkan kesadaran masyarakat mengenai peran penting komunikasi dalam keadaan darurat."
    },
    {
        img: '/images/journey/2023.png',
        title: "Ajisaka 2023",
        text: "Dengan tema 'Agnia Abhipraya: Pembawa Cahaya Pengharapan', Ajisaka 2023 mengangkat isu gender equity yang berangkat dari keresahan akan kurangnya sikap dan pemahaman masyarakat terhadap keadilan gender di Indonesia."
    },
]

export const team = [
    {
        division: "Pembina",
        data: [
            // {
            //     position: "",
            //     name: [
            //         "Masageng Widagdhaprasana, S.I.P., MMktg.Comm.",
            //         "Syaifa Tania, S.I.P., M.A."
            //     ]
            // }
            [
                {
                    value: "Masageng Widagdhaprasana, S.I.P., MMktg.Comm.",
                    as: "name"
                },
                {
                    value: "Syaifa Tania, S.I.P., M.A.",
                    as: "name"
                }
            ],
        ],
    },
    {
        division: "Pengurus Harian",
        data: [
            // { position: "Steering Committee", name: ["Muhammad Nadif F. R"] },
            // { position: "Wakil Ketua Umum", name: ["Jason Tambayong"] },
            // {
            //     position: "Sekretaris",
            //     name: ["Jenika Almas Shorfina", "Shabrina Mutiara Agista"]
            // },
            // { position: "Ketua Umum", name: ["Tasya Melyana Kusuma D."] },
            // { position: "Competition Manager", name: ["Raditya Muhammad"] },
            // {
            //     position: "Bendahara",
            //     name: ["Shafa Azizah Putri Azka", "Hana Hamidah"]
            // }
            [
                {
                    value: "Steering Committee",
                    as: "pos"
                },
                {
                    value: "Muhammad Nadif F. R",
                    as: "name"
                },
                {
                    value: "Wakil Ketua Umum",
                    as: "pos"
                },
                {
                    value: "Jason Tambayong",
                    as: "name"
                },
                {
                    value: "Sekretaris",
                    as: "pos"
                },
                {
                    value: "Jenika Almas Shorfina",
                    as: "name"
                },
                {
                    value: "Shabrina Mutiara Agista",
                    as: "name"
                },
            ],
            [
                {
                    value: "Ketua Umum",
                    as: "pos"
                },
                {
                    value: "Tasya Melyana Kusuma D.",
                    as: "name"
                },
                {
                    value: "Competition Manager",
                    as: "pos"
                },
                {
                    value: "Raditya Muhammad",
                    as: "name"
                },
                {
                    value: "Bendahara",
                    as: "pos"
                },
                {
                    value: "Shafa Azizah Putri Azka",
                    as: "name"
                },
                {
                    value: "Hana Hamidah",
                    as: "name"
                }

            ],
        ]
    },
    {
        division: "Lomba Arjuna",
        data: [
            // { position: "Ketua Divisi", name: ["Salmaa Nasywa Az Zahra"] },
            // {
            //     position: "Staff",
            //     name: [
            //         "Rayhan Akbar Rizaldhy",
            //         "Annisa Faizah Asmara",
            //         "Sarah Catherine Br Tobing",
            //         "Keysha Paradisa Enra"
            //     ]
            // }
            [
                {
                    value: "Ketua Divisi",
                    as: "pos"
                },
                {
                    value: "Salmaa Nasywa Az Zahra",
                    as: "name"
                },

            ],
            [
                {
                    value: "Staff",
                    as: "pos"
                },
                {
                    value: "Rayhan Akbar Rizaldhy",
                    as: "name"
                },
                {
                    value: "Annisa Faizah Asmara",
                    as: "name"
                },
                {
                    value: "Sarah Catherine Br Tobing",
                    as: "name"
                },
                {
                    value: "Keysha Paradisa Enra",
                    as: "name"
                }
            ]
        ]
    },
    {
        division: "Lomba Kresna",
        data: [
            // { position: "Ketua Divisi", name: ["Aliya Zaranggie"] },
            // {
            //     position: "Staff",
            //     name: [
            //         "Cecelia Rinti Monica",
            //         "Salman Ahza Albanjari",
            //         "Nasywa Aliyah Ramadhani"
            //     ]
            // }
            [
                {
                    value: "Ketua Divisi",
                    as: "pos"
                },
                {
                    value: "Aliya Zaranggie",
                    as: "name"
                },

            ],
            [
                {
                    value: "Staff",
                    as: "pos"
                },
                {
                    value: "Cecelia Rinti Monica",
                    as: "name"
                },
                {
                    value: "Salman Ahza Albanjari",
                    as: "name"
                },
                {
                    value: "Nasywa Aliyah Ramadhani",
                    as: "name"
                }
            ]
        ]
    },
    {
        division: "Lomba Prahasta",
        data: [
            // { position: "Ketua Divisi", name: ["Muhammad Haldis M.T"] },
            // {
            //     position: "Staff",
            //     name: [
            //         "Jasmine Rizky El Yasinta",
            //         "Muhammad Dika Zaydanhakeem",
            //         "Najwa Fawnia Afif",
            //         "Adelia Christi"
            //     ]
            // }
            [
                {
                    value: "Ketua Divisi",
                    as: "pos"
                },
                {
                    value: "Muhammad Haldis M.T",
                    as: "name"
                },

            ],
            [
                {
                    value: "Staff",
                    as: "pos"
                },
                {
                    value: "Jasmine Rizky El Yasinta",
                    as: "name"
                },
                {
                    value: "Muhammad Dika Zaydanhakeem",
                    as: "name"
                },
                {
                    value: "Najwa Fawnia Afif",
                    as: "name"
                },
                {
                    value: "Adelia Christi",
                    as: "name"
                }
            ]
        ]
    },
    {
        division: "Lomba Sadewa",
        data: [
            // { position: "Ketua Divisi", name: ["Kinanti Soesanto"] },
            // {
            //     position: "Staff",
            //     name: [
            //         "Putu Nadia Nevita",
            //         "Sheila Rahmasari Mardanus",
            //         "Syifa Nuril Karimah",
            //         "Graceia Gabriela Ginting"
            //     ]
            // }
            [
                {
                    value: "Ketua Divisi",
                    as: "pos"
                },
                {
                    value: "Kinanti Soesanto",
                    as: "name"
                },

            ],
            [
                {
                    value: "Staff",
                    as: "pos"
                },
                {
                    value: "Putu Nadia Nevita",
                    as: "name"
                },
                {
                    value: "Sheila Rahmasari Mardanus",
                    as: "name"
                },
                {
                    value: "Syifa Nuril Karimah",
                    as: "name"
                },
                {
                    value: "Graceia Gabriela Ginting",
                    as: "name"
                }
            ]
        ]
    },
    {
        division: "Lomba Nakula",
        data: [
            // { position: "Ketua Divisi", name: ["Viridian Mangsah Puspandara"] },
            // {
            //     position: "Staff",
            //     name: ["Zahra Hasna Aulia", "Rifdah Janitra Nareswari"]
            // }
            [
                {
                    value: "Ketua Divisi",
                    as: "pos"
                },
                {
                    value: "Viridian Mangsah Puspandara",
                    as: "name"
                },

            ],
            [
                {
                    value: "Staff",
                    as: "pos"
                },
                {
                    value: "Zahra Hasna Aulia",
                    as: "name"
                },
                {
                    value: "Rifdah Janitra Nareswari",
                    as: "name"
                }

            ]
        ]
    },
    {
        division: "Lomba Dewi Sinta",
        data: [
            // { position: "Ketua Divisi", name: ["Alma Alsyha Br Tarigan"] },
            // {
            //     position: "Staff",
            //     name: ["Kezia Aurora", "Sarah Kristina"]
            // }
            [
                {
                    value: "Ketua Divisi",
                    as: "pos"
                },
                {
                    value: "Alma Alsyha Br Tarigan",
                    as: "name"
                },

            ],
            [
                {
                    value: "Staff",
                    as: "pos"
                },
                {
                    value: "Kezia Aurora",
                    as: "name"
                },
                {
                    value: "Sarah Kristina",
                    as: "name"
                }
            ]
        ]
    },
    {
        division: "Acara",
        data: [
            // { position: "Ketua Divisi", name: ["Nadia Haura Mardani"] },
            // { position: "Wakil Ketua Divisi", name: ["Inayatul Auliya"] },
            // {
            //     position: "Staff",
            //     name: [
            //         "Noor Faizah",
            //         "Muhammad Ainur Rizky",
            //         "Selma Rahmatul Azizah",
            //         "Ike Meliyasari",
            //         "Tifaron Stefanz Ralph Tusin",
            //         "Josephine Violetta Nathania",
            //         "Fachrysa Firstiara Nadia"
            //     ]
            // }
            [
                {
                    value: "Ketua Divisi",
                    as: "pos"
                },
                {
                    value: "Nadia Haura Mardani",
                    as: "name"
                },
                {
                    value: "Wakil Ketua Divisi",
                    as: "pos"
                },
                {
                    value: "Inayatul Auliya",
                    as: "name"
                },
                {
                    value: "Staff",
                    as: "pos"
                },
                {
                    value: "Noor Faizah",
                    as: "name"
                }
            ],
            [
                {
                    value: "Muhammad Ainur Rizky",
                    as: "name"
                },
                {
                    value: "Selma Rahmatul Azizah",
                    as: "name"
                },
                {
                    value: "Ike Meliyasari",
                    as: "name"
                },
                {
                    value: "Tifaron Stefanz Ralph Tusin",
                    as: "name"
                },
                {
                    value: "Josephine Violetta Nathania",
                    as: "name"
                },
                {
                    value: "Fachrysa Firstiara Nadia",
                    as: "name"
                }

            ]
        ]
    },
    {
        division: "Public Affairs",
        data: [
            // { position: "Ketua Divisi", name: ["Aldrin Akbar Darmawan"] },
            // { position: "Pelaksana Tugas", name: ["Ajra Hasani Partadiredja"] },
            // {
            //     position: "Staff",
            //     name: [
            //         "Garneta Jeconia Venus Firstynio",
            //         "Felycia Devizca",
            //         "Satya Izmisajidah",
            //         "Fazila Nayyara Dahayu",
            //         "Bernadetha Adelia Chrysanta A.",
            //         "Maria Nyssa Olyvia",
            //         "Herwidati Maliki",
            //         "Feyza Adristy",
            //         "Margareta Anugrah Paulina Samosir"
            //     ]
            // }
            [
                {
                    value: "Ketua Divisi",
                    as: "pos"
                },
                {
                    value: "Aldrin Akbar Darmawan",
                    as: "name"
                },
                {
                    value: "Pelaksana Tugas",
                    as: "pos"
                },
                {
                    value: "Ajra Hasani Partadiredja",
                    as: "name"
                },
                {
                    value: "Staff",
                    as: "pos"
                },
                {
                    value: "Garneta Jeconia Venus Firstynio",
                    as: "name"
                },
                {
                    value: "Felycia Devizca",
                    as: "name"
                }
            ],
            [
                {
                    value: "Satya Izmisajidah",
                    as: "name"
                },
                {
                    value: "Fazila Nayyara Dahayu",
                    as: "name"
                },
                {
                    value: "Bernadetha Adelia Chrysanta A.",
                    as: "name"
                },
                {
                    value: "Maria Nyssa Olyvia",
                    as: "name"
                },
                {
                    value: "Herwidati Maliki",
                    as: "name"
                },
                {
                    value: "Feyza Adristy",
                    as: "name"
                },
                {
                    value: "Margareta Anugrah Paulina Samosir",
                    as: "name"
                }
            ]
        ]
    },
    {
        division: "Roadshow",
        data: [
            // { position: "Ketua Divisi", name: ["Keysha Putri Permata Abdillah"] },
            // {
            //     position: "Staff",
            //     name: [
            //         "Arya Juni Prakoso",
            //         "Salma Adji Safitri",
            //         "Dyah Lintang Izza Salma",
            //         "Nailah Hana Farihah",
            //         "Serepion Nattan Deon",
            //         "Emily Molina Putri Jayusman"
            //     ]
            // }
            [
                {
                    value: "Ketua Divisi",
                    as: "pos"
                },
                {
                    value: "Keysha Putri Permata Abdillah",
                    as: "name"
                },
            ],
            [
                {
                    value: "Staff",
                    as: "pos"
                },
                {
                    value: "Arya Juni Prakoso",
                    as: "name"
                },
                {
                    value: "Salma Adji Safitri",
                    as: "name"
                },
                {
                    value: "Dyah Lintang Izza Salma",
                    as: "name"
                },
                {
                    value: "Nailah Hana Farihah",
                    as: "name"
                },
                {
                    value: "Serepion Nattan Deon",
                    as: "name"
                },
                {
                    value: "Emily Molina Putri Jayusman",
                    as: "name"
                }
            ]
        ]
    },
    {
        division: "Liaison Officer",
        data: [
            // { position: "Ketua Divisi", name: ["Feyza Anindita Hakim"] },
            // { position: "Wakil Ketua Divisi", name: ["Amalia Zahra"] },
            // {
            //     position: "Staff",
            //     name: [
            //         "Venu Syalendra Hadianly",
            //         "Andika Kusuma",
            //         "Nandini Mu’afa",
            //         "Gina Angelina Salsabila",
            //         "Firzanah Nuraini",
            //         "Artikha Wibawa",
            //         "Saskia Ayu Luvina"
            //     ]
            // }
            [
                {
                    value: "Ketua Divisi",
                    as: "pos"
                },
                {
                    value: "Feyza Anindita Hakim",
                    as: "name"
                },
                {
                    value: "Wakil Ketua Divisi",
                    as: "pos"
                },
                {
                    value: "Amalia Zahra",
                    as: "name"
                },
                {
                    value: "Staff",
                    as: "pos"
                },
                {
                    value: "Venu Syalendra Hadianly",
                    as: "name"
                },
            ],
            [
                {
                    value: "Andika Kusuma",
                    as: "name"
                },
                {
                    value: "Nandini Mu'afa",
                    as: "name"
                },
                {
                    value: "Gina Angelina Salsabila",
                    as: "name"
                },
                {
                    value: "Firzanah Nuraini",
                    as: "name"
                },
                {
                    value: "Artikha Wibawa",
                    as: "name"
                },
                {
                    value: "Saskia Ayu Luvina",
                    as: "name"
                }
            ]
        ]
    },
    {
        division: "Business Development",
        data: [
            // { position: "Ketua Divisi", name: ["Nurannisa Satyabrata"] },
            // { position: "Wakil Ketua Divisi", name: ["Puruhita Larassantidewi"] },
            // { position: "Pelaksana Tugas", name: ["Faiza Inaya Darnez"] },
            // {
            //     position: "Staff",
            //     name: [
            //         "Nadza Kalisa Putri",
            //         "Cathrine Natasha Putri Sianturi",
            //         "Dyah Mukti Kusumaningrum",
            //         "Nasywa Alejandra",
            //         "Kadek Kanyaka Andamari",
            //         "Farinnisa Aulia",
            //         "Saddam Fitra Endri"
            //     ]
            // }
            [
                {
                    value: "Ketua Divisi",
                    as: "pos"
                },
                {
                    value: "Nurannisa Satyabrata",
                    as: "name"
                },
                {
                    value: "Wakil Ketua Divisi",
                    as: "pos"
                },
                {
                    value: "Puruhita Larassantidewi",
                    as: "name"
                },
                {
                    value: "Pelaksana Tugas",
                    as: "pos"
                },
                {
                    value: "Faiza Inaya Darnez",
                    as: "name"
                },
            ],
            [
                {
                    value: "Staff",
                    as: "pos"
                },
                {
                    value: "Nadza Kalisa Putri",
                    as: "name"
                },
                {
                    value: "Cathrine Natasha Putri Sianturi",
                    as: "name"
                },
                {
                    value: "Dyah Mukti Kusumaningrum",
                    as: "name"
                },
                {
                    value: "Nasywa Alejandra",
                    as: "name"
                },
                {
                    value: "Kadek Kanyaka Andamari",
                    as: "name"
                },
                {
                    value: "Farinnisa Aulia",
                    as: "name"
                },
                {
                    value: "Saddam Fitra Endri",
                    as: "name"
                }
            ]
        ]
    },
    {
        division: "Pameran",
        data: [
            // { position: "Ketua Divisi", name: ["Shafira Damayanti"] },
            // { position: "Wakil Ketua Divisi", name: ["Najwa Awliya"] },
            // {
            //     position: "Staff",
            //     name: [
            //         "Amira Larasati",
            //         "Fadhila Adzkia Hanif",
            //         "Belva Salsabila Anas Putri",
            //         "Rania Daniswari H.",
            //         "Khansa Ath-Thahirah Suriawan",
            //         "Ahmad Fazil Ayman",
            //         "Fier Indira",
            //         "Velma Aisha Zam Zam",
            //         "Aida Salma",
            //         "Raissa Serafina Rayendra"
            //     ]
            // }
            [
                {
                    value: "Ketua Divisi",
                    as: "pos"
                },
                {
                    value: "Shafira Damayanti",
                    as: "name"
                },
                {
                    value: "Wakil Ketua Divisi",
                    as: "pos"
                },
                {
                    value: "Najwa Awliya",
                    as: "name"
                },
                {
                    value: "Staff",
                    as: "pos"
                },
                {
                    value: "Amira Larasati",
                    as: "name"
                },
                {
                    value: "Fadhila Adzkia Hanif",
                    as: "name"
                },
                {
                    value: "Belva Salsabila Anas Putri",
                    as: "name"
                }
            ],
            [
                {
                    value: "Rania Daniswari H.",
                    as: "name"
                },
                {
                    value: "Khansa Ath-Thahirah Suriawan",
                    as: "name"
                },
                {
                    value: "Ahmad Fazil Ayman",
                    as: "name"
                },
                {
                    value: "Fier Indira",
                    as: "name"
                },
                {
                    value: "Velma Aisha Zam Zam",
                    as: "name"
                },
                {
                    value: "Aida Salma",
                    as: "name"
                },
                {
                    value: "Raissa Serafina Rayendra",
                    as: "name"
                }
            ]
        ]
    },
    {
        division: "Logistik & IT",
        data: [
            // { position: "Ketua Divisi", name: ["Dodi Kurniawan"] },
            // { position: "Wakil Ketua Divisi IT", name: ["Semeion Bintang"] },
            // {
            //     position: "Staff",
            //     name: [
            //         "Ghifari Habib Yunus",
            //         "Hajj Burhanuddin Maajid",
            //         "Nurmiranti",
            //         "Hanestatri Wiritanaya"
            //     ]
            // }
            [
                {
                    value: "Ketua Divisi",
                    as: "pos"
                },
                {
                    value: "Dodi Kurniawan",
                    as: "name"
                },
                {
                    value: "Wakil Ketua Divisi IT",
                    as: "pos"
                },
                {
                    value: "Semeion Bintang",
                    as: "name"
                }
            ],
            [
                {
                    value: "Staff",
                    as: "pos"
                },
                {
                    value: "Ghifari Habib Yunus",
                    as: "name"
                },
                {
                    value: "Hajj Burhanuddin Maajid",
                    as: "name"
                },
                {
                    value: "Nurmiranti",
                    as: "name"
                },
                {
                    value: "Hanestatri Wiritanaya",
                    as: "name"
                }
            ]
        ]
    },
    {
        division: "Kreatif",
        data: [
            // { position: "Ketua Divisi", name: ["Sofira Tufi Utomo"] },
            // { position: "Wakil Ketua Divisi", name: ["Mohammad Miftahul Kirom","Muhammad Ghazi Algifari"] },
            // {
            //     position: "Staff",
            //     name: [
            //         "Mahdi Hidayatulloh Cakra Buana",
            //         "Ardelia Dewani Adwina Putri",
            //         "Abdillah Ramadhani",
            //         "Kaisha Viani Widyanto",
            //         "Khalaifa Ikhsanafisyah Daud",
            //         "Beatrix Mega Cininta",
            //         "Cleopas Azriel Satyanaraghana",
            //         "Jason Emmanuel Widihandojo"
            //     ]
            // }
            [
                {
                    value: "Ketua Divisi",
                    as: "pos"
                },
                {
                    value: "Sofira Tufi Utomo",
                    as: "name"
                },
                {
                    value: "Wakil Ketua Divisi",
                    as: "pos"
                },
                {
                    value: "Mohammad Miftahul Kirom",
                    as: "name"
                },
                {
                    value: "Muhammad Ghazi Algifari",
                    as: "name"
                },
            ],
            [
                {
                    value: "Staff",
                    as: "pos"
                },
                {
                    value: "Mahdi Hidayatulloh Cakra Buana",
                    as: "name"
                },
                {
                    value: "Ardelia Dewani Adwina Putri",
                    as: "name"
                },
                {
                    value: "Abdillah Ramadhani",
                    as: "name"
                }
            ]
        ]
    }
];

export const faq = [
    {
        question: "Apakah siswa/i SMA dapat mengikuti Ajisaka?",
        answer: "Ajisaka hanya ditujukan untuk mahasiswa saja"
    },
    {
        question: "Apakah boleh mengikuti lebih dari 1 lomba?",
        answer: "Satu orang hanya boleh mendaftar 1 mata lomba yaa"
    },
    {
        question: "1 tim dapat berisi berapa anggota?",
        answer: "Tiap kategori lomba memiliki ketentuan yang berbeda-beda. Selengkapnya dapat disimak melalui booklet"
    },
    {
        question: "Lomba dilaksanakan secara daring atau luring?",
        answer: "Ajisaka diselenggarakan secara hybrid. Proses seleksi akan dilangsungkan secara daring, sementara semifinal dan final akan dilaksanakan secara luring."
    },
]

