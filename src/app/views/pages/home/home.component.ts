import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ],
})
export class HomeComponent implements OnInit {
    homeData = {
        header: {
            title: 'Expected Credit Loss Calculator',
            description: `"Doubtless" has developed the "Doubtless", for trade receivables. The "Doubtless" takes information that most
      entities already have regarding the historical credit behavior of their customers and applies IFRS
      intelligence
      and quantitative methods to deliver an IFRS 9-compliant Doubtless computation which incorporates
      forward-looking
      information.`,
            image: './../../../../assets/da.png',
        },
        howItWorks: {
            title: 'Complexity Made Simple',
            sections: [
                {
                    title: 'Background And Solution',
                    description: `IFRS 9 requires impairments for Trade Receivables to be calculated
                    on an expected credit loss basis (Doubtless). The calculation of Doubtless must have the following attributes :`,
                    list: [
                        'Probability-weighted,so not biased towards worst or best case scenarios.',
                        'Incorporate the effect of time value of money.',
                        'Make use of reliable information including the use of historical, current and forward-looking Information.',
                    ],
                    extraDescription: `For most companies this will require a significantly different approach to
                    impairment calculation and may require some new skills to apply competently.`,
                },
                {
                    title: 'The Output',
                    description: `The Doubtless computation is delivered
                    to you in a report which includes the information an entity is required to
                    provide in its financial statements. The report will also include appendices
                    that will include information which your auditor will require to audit the outcome such as a summary of:`,
                    list: [
                        'The method applied to develop the provisions matrix',
                        'The key inputs utilized',
                        'User data uploaded, and',
                        'The outcomes of regression analysis utilized to adjust for forward-looking Information.',
                    ],
                    extraDescription: ``,
                },
            ],
            ideation: {
                title: 'How Does It Work?',
                description: `Once activated, the Doubtless will ask you to upload certain of your historical customer data,
              e.g. monthly debtors aged analysis , write-offs experienced , recoveries achieved etc.
               .That’s it, the Doubtless does all the rest!`,
            },
        },
        faqs: {
            title: 'FAQS',
            questions: [
                {
                    question: 'Can I use it?',
                    answer: `Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.`,
                },
                {
                    question: 'Which Countries Can Use The Doubtless?',
                    answer: `Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.`,
                },
                {
                    question: 'How Does The Doubtless Calculator Calculate My IFRS 9 Impairment?',
                    answer: `Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.`,
                },
                {
                    question: 'Does The Calculator Use Forward-Looking Information?',
                    answer: `Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.`,
                },
                {
                    question: 'What Is The Output?',
                    answer: `Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.`,
                },
                {
                    question: 'Can The Auditors Do This For Me?',
                    answer: `Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.`,
                },
            ],
        },
        about: {
            title: 'ABOUT Doubtless',
            description: `Doubtless IS AN IFRS ADVISORY FIRM ASSISTING CLIENTS GLOBALLY WITH THE IMPLEMENTATION
            OF IFRS AND ITS APPLICATION TO SPECIFIC TRANSACTIONS , ADOPTION OF STANDARDS AND
            VALUATIONS REQUIRED BY IFRS. OUR TEAM OF JSE-ACCREDITED IFRS ADVISORS OPERATE ACROSS VARIED INDUSTRIES IN OVER 20 COUNTRIES`,
            image: './../../../../assets/about.png',
            sections: [
                {
                    icon: './../../../../assets/team-dev.svg',
                    title: 'Talent Development',
                    description: `Our team of facilitators are subject matter experts who deliver extensive training
                     programmes on specific areas. <br/>
               We deliver training in South Africa across the rest
                of the Continent, the United Kingdom and Europe, the Middle East and Australia.  <br/>
               We have the ability to customise our training solutions
               to suit clients ranging from large multinationals to small businesses. Furthermore,
               clients are able to access training in different ways by tailoring it to suit their specific needs.`,
                },
                {
                    icon: './../../../../assets/corporate.svg',
                    title: 'Corporate Finance',
                    description: `Our corporate financiers and valuation experts provide end-to-end
                  transaction support services for mergers and acquisitions. We deliver robust business valuations,
                   probing due diligence services, astute deal structuring advice and other related support services right through to
                    financial reporting support. <br>
                    Our valuation experts provide a full array of IFRS compliant valuation services covering
                     valuation of financial instruments, long-term environmental and rehabilitation provisions, <br/>
                     employee share schemes, as well as purchase price allocation (PPA)
                     valuations of intangible assets such
                     as customers relationships, brands, licenses, etc.`,
                },
                {
                    icon: './../../../../assets/integrated.svg',
                    title: 'Integrated Software',
                    description: `We provide integrated software across various platforms and industries,
                    offering dynamic leading edge solutions which are tailored
                     made to suit your industry.
                      <br>
                    Our experienced team creates dynamic IT applications that
                     combine learning and technology onto one platform.
                    This integrated solution delivers improved efficiency in
                    the rapid delivery of key information and knowledge.`,
                },
                {
                    icon: './../../../../assets/financial.svg',
                    title: 'Financial Reporting',
                    description: `We are a multidisciplinary team of JSE-Accredited IFRS specialists with broad experience
                     in assisting listed companies,
                    multinationals and large, state-owned enterprises with their financial reporting. <br/>
                    The depth of our experience and expertise is reflected in the varied industries and
                    numerous markets that we service from South Africa across the African continent to the United Kingdom, <br/>
                     Europe, the Middle East and Australia. Given the complexity of financial reporting standards and the
                     strict independence requirements placed on auditors, we are ideally positioned to directly assist companies
                     with their corporate reporting prerequisites.`,
                },
            ],
        },
        partners: {
            title: 'Partners',
            images: [],
        },
    };
    constructor(private viewportScroller: ViewportScroller) {}

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }
    ngOnInit(): void {
        for (let i = 1; i <= 20; i++) {
            this.homeData.partners.images.push(`./../../../../assets/logos/${i}.png`);
        }
    }
}
