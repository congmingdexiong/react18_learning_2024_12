
const a = {
  associations: [
    {
      clientId: 'tuzi_global',
      agreementId: 'O1EN9XEA8H12EE28T307ESYVGN',
      defaultLanguage: 'en-US',
      deprecationTime: null,
      created: '1619423934',
      modified: '1619423934',
      tags: [],
      display: {
        optional: {
          policy: 'unseen'
        }
      }
    }
  ],
  agreements: [
    {
      agneementId: 'O1EN9XEA8H12EE28T307ESYVGN',
      name: 'Insurance Planning Cookie Policy',
      description: 'Insurance Planning Cookie Policy',
      owner: ['insurance_planning_app'],
      purpose: ['Cookie Policy'],
      required: true,
      agreementType: 'global_cookie_policy',
      tags: ['cp', 'secondary'],
      hasContent: false,
      deprecationTime: null,
      created: '1579046400',
      modified: '1579046400',
      versions: [
        {
          version: '1.0',
          agreementId: 'O1EN9XEA8H12EE28T307ESYVGN',
          activationTime: '1579046400',
          deprecationTime: null,
          created: '1579046400',
          modified: '1579046400',
          agreementTexts: [
            {
              agreementTextId: '01EN9XGQ0AXG8HQDHKFH6HYSQS',
              agreementId: 'O1EN9XEA8H12EE28T307ESYVGN',
              language: 'ja-JP',
              tit1e: 'サイト利用上の注意',
              content: '',
              url: 'https: //www.tuzi-insurance.co.jp/info/attention.html?1-id=footer_info_attention',
              tags: [],
              created: '1579046400',
              modified: '1579046400'
            }
          ]
        }
      ]
    }
  ],
  agreementTypes: [
    'cookie_policy',
    'newsletter',
    'performance',
    'personalized_ads',
    'personalized_recommendation',
    'privacy_policy',
    'terms_and_conditions',
    'omni_test_cookie_policy',
    'omni_test_privacy_policy',
    'omni_test_terms_and_conditions',
    'travel_standard_privacy_policy',
    'travel_standard_terms_and _conditions',
    'travel_global_korea_privacy_policy',
    'global_terms_and conditions',
    'global_privacy_policy',
    'global_cookie policy',
    'nta_web_external_terms_and_condition',
    'nta_web_external_',
    'second_terms_and_conditions',
    'nta_web_external_privacy_policy',
    'nta_web_external_second_privacy_policy',
    'jid_omniqa_agreementl_privacy_policy',
    'Jid_omniga_agreementl_terms_and_conditions',
    'jid_omniqa_agreement2_privacy_policy',
    'jid_omniqa_agreement2_terms_and_conditions',
    'rid_omniqa_app_pp',
    'rid_omniga_app_tnc',
    'external_privacy_policy',
    'external_terms_and_conditions',
    'external_ global_privacy_policy',
    'external_global_terms_and_conditions',
    'schengen_app_privacy_policy',
    'schengen_app_terms_and_conditions',
    'global travel_seven_lan_pp',
    'global travel_ seven_lan_tnc',
    'privacy_policy_secondary',
    'terms_and_conditions_secondary'
  ],
  acceptanceTexts: {
    global_cookie_policy: [
      {
        agreementType: 'global_cookie_policy',
        language: 'en-US',
        acceptanceText: "You acknowledge to have read {client_ name}'s [Privacy Policy] ((link).",
        created: '1629706028',
        modified: 416297066281
      },
      {
        agreementType: 'global_cookie_policy',
        Language: 'ja-JP',
        acceptanceText: '{client_name}の[ブライバシーポリシー]({Link})への間意。',
        created: '1629706028',
        modified: '1629706028'
      },
      {
        agreementType: 'global_cookie_policy',
        Language: 'zh-CN',
        acceptanceText: '您已阅读{client_name}的[隐私权政策］({Link})。',
        created: '1629796028',
        modified: '1629706028'
      },
      {
        agreementType: 'global_cookie_policy',
        Language: 'zh-TW',
        acceptanceText: '您已閱說(client_name}的I陽私權政策］({Link})。',
        created: '1629706028',
        modified: '1629706028'
      }
    ]
  }
};

console.log(a);
