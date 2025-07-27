// eslint-disable-extire-file 
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, addToNum } from './store/module/counterStore';
import { fetchChannelList } from './store/module/channelStrore';
import { useRef, useCallback } from 'react';
export default function App(props) {
  const { id } = props
  const { count } = useSelector((state) => state.counter);
  // eslint-disable-next-line no-undef
  const [msg, setMsg] = useState('');

  const [cmpAgreement, setCmpAgreement] = useState({
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
    agreementText: {
      'global_cookie policy': [
        {
          agreementType: 'global_cookie policy',
          language: 'en-US',
          acceptanceText: "You acknowledge to have read {client_ name}'s [Privacy Policy] ((link).",
          created: '1629706028',
          modified: 416297066281
        },
        {
          agreementType: 'global_cookie policy',
          Language: 'ja-JP',
          acceptanceText: '{client_name}の[ブライバシーポリシー]({Link})への間意。',
          created: '1629706028',
          modified: '1629706028'
        },
        {
          agreementType: 'global_cookie policy',
          Language: 'zh-CN',
          acceptanceText: '您已阅读{client_name}的[隐私权政策］({Link})。',
          created: '1629796028',
          modified: '1629706028'
        },
        {
          agreementType: 'global_cookie policy',
          Language: 'zh-TW',
          acceptanceText: '您已閱說(client_name}的I陽私權政策］({Link})。',
          created: '1629706028',
          modified: '1629706028'
        }
      ]
    },
    associations: [{
      clientId: 'tuzi_global1',
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
    }, {
      clientId: 'tuzi_global2',
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
    }, {
      clientId: 'tuzi_global3',
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
    }],
    agreement: [
      {
        agneementId: 'O1EN9XEA8H12EE28T307ESYVGN',
        name: 'Insurance Planning Cookie Policy',
        description: 'Insurance Planning Cookie Policy',
        owner: ['insurance_planning_app'],
        purpose: ['Cookie Policy'],
        required: true,
        agreementType: 'global_cookie policy',
        tags: ['cp', 'secondary'],
        hasContent: false,
        deprecationTime: null,
        created: '1579046400',
        modified: '1579046400',
        versions: [
          {
            version: '1.0',
            agreementId: 'B1ENSXEA3H12EE28T3Q7ESYVGN',
            activationTime: '1579046400',
            deprecationTime: null,
            created: '1579046400',
            modified: '1579046400',
            agreementTexts: [
              {
                agreementTextId: '01EN9XGQ0AXG8HQDHKFH6HYSQS',
                agreementId: 'O1EN9XEA8H12EE28T3Q7ESYVGN',
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
    ]
  });
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const { channelList } = useSelector((state) => state.channel);

  useEffect(() => {
    dispatch(fetchChannelList());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log('渲染了'); //每次渲染都会执行
  //   return () => {
  //     console.log('卸载了');
  //   };
  // }, []);

  const sendToElm = () => {
    if (window.elmApp?.ports?.receiveFromReact) {
      window.elmApp.ports.receiveFromReact.send('Hello from React!');
    }
  };

  // useEffect(() => {
  //   console.log("id:", id);

  //   const handler = (event) => {
  //     console.log('Received from Elm:', event.detail);
  //     setMsg(event.detail);
  //   };

  //   window.addEventListener('elm-to-react', handler);
  //   return () => window.removeEventListener('elm-to-react', handler);
  // }, []);

  function useEventCallback(fn) {
    const fnRef = useRef(fn);
    useEffect(() => {
      fnRef.current = fn; // 自动保持最新
    });
    return useCallback((...args) => fnRef.current(...args), []);
  }

  const handleWindowEvent = useEventCallback(() => {
    // console.log('最新 count:', count);
    console.log(cmpAgreement.associations[0]);

  });

  useEffect(() => {
    // 注册消息接收函数
    window.reactMsgHandler[id] = (data) => {
      setMessage(data);
    };

    return () => {
      delete window.reactMsgHandler[id];
    };
  }, [id]);

  useEffect(() => {
    const handler = (event) => {
      // console.log(cmpAgreement.associations[0]);

      // event 是 CustomEvent，数据在 event.detail
      console.log('收到 Elm 数据:', event.detail);
      // setData(event.detail);
    };

    // 监听 elm-to-react
    window.addEventListener('elm-to-react', handleWindowEvent);

    // 清理
    return () => {
      window.removeEventListener('elm-to-react', handleWindowEvent);
    };
  }, []);

  // const handleChange = (e) => {
  //   const value = e.target.value;
  // };

  // 我们用状态管理所有输入框的值
  const [inputs, setInputs] = useState(
    cmpAgreement.associations.reduce((acc, cur) => {
      acc[cur.clientId] = cur.clientId; // 初始值等于 clientId
      return acc;
    }, {})
  );
  const handleChange = (clientId, event) => {
    const newCreatedValue = event.target.value;

    // 复制并更新 associations 数组中对应 clientId 的 created 字段
    const newAssociations = cmpAgreement.associations.map((item) =>
      item.clientId === clientId ? { ...item, created: newCreatedValue } : item
    );

    // 更新 cmpAgreement 的状态
    setCmpAgreement({
      ...cmpAgreement,
      associations: newAssociations,
    });
    window.inputs = {
      "test-1": JSON.stringify({
        ...cmpAgreement,
        associations: newAssociations,
      })
    }
  };

  return (
    <div>
      {id}
      {cmpAgreement.associations.map(({ clientId, created }) => (
        <div key={clientId} style={{ marginBottom: 8 }}>
          <label htmlFor={clientId} style={{ marginRight: 8 }}>
            {clientId}:
          </label>
          <input
            id={clientId}
            type="text"
            value={created}
            onChange={(e) => handleChange(clientId, e)}
          />
        </div>
      ))}
      <pre>{JSON.stringify(cmpAgreement.associations, null, 2)}</pre>
    </div>
  );
}
