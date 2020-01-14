// const data = {
//   total: 104,
const data = [
    {
      number: 1,
      gdc_DataExplorerDataID: 1,
      gdc_DataExplorerDataName: "Invoice Data",
      gdc_DataExplorerDataQuery: "select * from invoice_hdr",
      gdc_DataExplorerDataModel:
        '[\r\n        {\r\n            "field": "customer_id",\r\n            "type": "string"\r\n        },\r\n        {\r\n            "field": "invoice_no",\r\n            "type": "string"\r\n        },\r\n        {\r\n            "field": "total_amount",\r\n            "type": "number"\r\n            \r\n        }\r\n    ]',
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 2,
      gdc_DataExplorerDataID: 2,
      gdc_DataExplorerDataName: "Update Invoice HDR",
      gdc_DataExplorerDataQuery: "select * from invoice_hdr",
      gdc_DataExplorerDataModel:
        '[{"field":"invoice_no","type":"string"},{"field":"order_no","type":"string"},{"field":"order_date","type":"date"},{"field":"invoice_date","type":"date"},{"field":"customer_id","type":"string"},{"field":"bill2_name","type":"string"},{"field":"bill2_contact","type":"string"},{"field":"bill2_address1","type":"string"},{"field":"bill2_address2","type":"string"},{"field":"bill2_city","type":"string"},{"field":"bill2_state","type":"string"},{"field":"bill2_postal_code","type":"string"},{"field":"ship2_name","type":"string"},{"field":"ship2_contact","type":"string"},{"field":"ship2_address1","type":"string"},{"field":"ship2_address2","type":"string"},{"field":"ship2_city","type":"string"},{"field":"ship2_state","type":"string"},{"field":"ship2_postal_code","type":"string"},{"field":"carrier_name","type":"string"},{"field":"fob","type":"string"},{"field":"terms_desc","type":"string"},{"field":"po_no","type":"string"},{"field":"salesrep_id","type":"string"},{"field":"salesrep_name","type":"string"},{"field":"brokerage","type":"number"},{"field":"freight","type":"number"},{"field":"ar_account_no","type":"string"},{"field":"gl_freight_account_no","type":"string"},{"field":"gl_brokerage_account_no","type":"string"},{"field":"brokerage_amt","type":"number"},{"field":"period","type":"number"},{"field":"year_for_period","type":"number"},{"field":"store_no","type":"string"},{"field":"invoice_type","type":"string"},{"field":"ship_to_id","type":"number"},{"field":"ship_date","type":"date"},{"field":"total_amount","type":"number"},{"field":"amount_paid","type":"number"},{"field":"terms_taken","type":"number"},{"field":"allowed","type":"number"},{"field":"paid_in_full_flag","type":"string"},{"field":"paid_by_check_no","type":"number"},{"field":"date_paid","type":"date"},{"field":"print_flag","type":"string"},{"field":"print_date","type":"date"},{"field":"company_no","type":"string"},{"field":"customer_id_number","type":"number"},{"field":"date_created","type":"date"},{"field":"date_last_modified","type":"date"},{"field":"last_maintained_by","type":"string"},{"field":"printed","type":"string"},{"field":"printed_date","type":"date"},{"field":"corp_address_id","type":"number"},{"field":"shipping_cost","type":"number"},{"field":"bill2_country","type":"string"},{"field":"ship2_country","type":"string"},{"field":"invoice_reference_no","type":"string"},{"field":"invoice_adjustment_type","type":"string"},{"field":"invoice_desc","type":"string"},{"field":"memo_amount","type":"number"},{"field":"bad_debt_amount","type":"number"},{"field":"invoice_class","type":"string"},{"field":"period_fully_paid","type":"number"},{"field":"year_fully_paid","type":"number"},{"field":"approved","type":"string"},{"field":"fc_thru_date","type":"date"},{"field":"cumulative_fc","type":"number"},{"field":"net_due_date","type":"date"},{"field":"terms_due_date","type":"date"},{"field":"terms_id","type":"string"},{"field":"branch_id","type":"string"},{"field":"disputed_flag","type":"string"},{"field":"statement_period","type":"number"},{"field":"statement_year","type":"number"},{"field":"other_charge_amount","type":"number"},{"field":"tax_amount","type":"number"},{"field":"original_document_type","type":"string"},{"field":"consolidated","type":"string"},{"field":"sold_to_ah_uid","type":"number"},{"field":"sold_to_customer_id","type":"number"},{"field":"ship_to_phone","type":"string"},{"field":"invoice_batch_uid","type":"number"},{"field":"freight_code_uid","type":"number"},{"field":"shipping_route_uid","type":"number"},{"field":"transmission_method","type":"number"},{"field":"terms_amount","type":"number"},{"field":"sales_location_id","type":"number"},{"field":"source_type_cd","type":"number"},{"field":"ship2_email_address","type":"string"},{"field":"currency_line_uid","type":"number"},{"field":"created_by","type":"string"},{"field":"tax_terms_amt","type":"number"},{"field":"tax_terms_taken","type":"number"},{"field":"carrier_insurance_amt","type":"number"},{"field":"inv_no_display","type":"string"},{"field":"iva_exemption_number","type":"string"},{"field":"iva_taxable_flag","type":"string"},{"field":"tax_amount_paid","type":"number"},{"field":"job_id","type":"string"},{"field":"invoice_paid_period","type":"number"},{"field":"invoice_period","type":"number"},{"field":"credit_memo_for_terms_flag","type":"string"},{"field":"record_type_cd","type":"number"},{"field":"commission_cost","type":"number"},{"field":"carton_count","type":"number"},{"field":"affiliated_training_center","type":"number"},{"field":"strategic_freight_in","type":"number"},{"field":"strategic_freight_out","type":"number"},{"field":"external_reference_no","type":"string"},{"field":"total_freightcharge_weight","type":"number"},{"field":"receiver_name","type":"string"},{"field":"cardlock_cons_invoice_flag","type":"string"},{"field":"record_type_reference_no","type":"string"},{"field":"rebill_invoice_reason_uid","type":"number"},{"field":"remove_from_open_def_rev_window","type":"string"},{"field":"edi_order_printed_flag","type":"string"},{"field":"downpayment_applied","type":"number"},{"field":"reverse_redemption_flag","type":"string"}]',
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 3,
      gdc_DataExplorerDataID: 10002,
      gdc_DataExplorerDataName: "Items",
      gdc_DataExplorerDataQuery:
        "select *, concat(item_desc, ' - ( ', inv_mast_uid, ')') as TexSearch from inv_mast where delete_flag = 'N' ",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 4,
      gdc_DataExplorerDataID: 10003,
      gdc_DataExplorerDataName: "CIOT Items",
      gdc_DataExplorerDataQuery: "select * from wc_CIOT_inv_mast",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 5,
      gdc_DataExplorerDataID: 10004,
      gdc_DataExplorerDataName: "CIOT Lots",
      gdc_DataExplorerDataQuery:
        "select  iv.*, \r\nlts.location_id,\r\nlts.qty_on_hand,\r\nlts.LotNumber,\r\nlts.UOM from wc_CIOT_lots as lts\r\njoin wc_CIOT_inv_mast as iv\r\non lts.inv_mast_uid = iv.inv_mast_uid\r\n",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 6,
      gdc_DataExplorerDataID: 10005,
      gdc_DataExplorerDataName: "CIOT Slabs",
      gdc_DataExplorerDataQuery: "select * from wc_CIOT_slab",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 7,
      gdc_DataExplorerDataID: 10006,
      gdc_DataExplorerDataName: "CIOT Tag Status",
      gdc_DataExplorerDataQuery: "select * from wc_CIOT_tag_status",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 8,
      gdc_DataExplorerDataID: 10007,
      gdc_DataExplorerDataName: "CIOT Fabricators",
      gdc_DataExplorerDataQuery: "select * from customer",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 9,
      gdc_DataExplorerDataID: 10008,
      gdc_DataExplorerDataName: "CIOT Tag Line",
      gdc_DataExplorerDataQuery:
        "select * from wc_CIOT_tag_slab_line as sl\r\njoin wc_CIOT_inv_mast as iv\r\non sl.item_id = iv.inv_mast_uid",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 10,
      gdc_DataExplorerDataID: 10009,
      gdc_DataExplorerDataName: "CIOT Tag Header",
      gdc_DataExplorerDataQuery:
        "select a.*,wcl.lead_name,c.customer_name from wc_CIOT_tag_header as a\r\njoin wc_lead as wcl\r\non a.lead_uid = wcl.lead_uid\r\njoin customer as c\r\non c.customer_id = a.fabricator_referal_id",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 11,
      gdc_DataExplorerDataID: 10010,
      gdc_DataExplorerDataName: "CIOT Tag Main Selection",
      gdc_DataExplorerDataQuery:
        "SELECT TOP (1000) hdr.[tag_header_id]\r\n      ,hdr.[status_id]\r\n      ,hdr.[lead_uid]\r\n\t  ,wl.lead_name\r\n\t  ,wl.salesrep_id\r\n\t  ,c.first_name + ' ' + c.last_name as SalesRep\r\n      ,[tag_date]\r\n      ,[expiration_date]\r\n\t  , wcts.name as StatusName\r\n      ,hdr.[created_by]\r\n      ,[fabricator_referal_id]\r\n      ,[tag_reference]\r\n      ,[so_allocated]\r\n\t  , count(*) as NumofSlabs\r\n\t  , sum(TSL.quantity) as TotalQuantity\r\n  FROM [webconnectdev].[dbo].[wc_CIOT_tag_header] as hdr\r\n  join wc_lead as wl\r\n  on hdr.lead_uid = wl.lead_uid\r\n  join contacts as c\r\n  on c.id =wl.salesrep_id\r\n  join wc_CIOT_tag_status wcts\r\n  on wcts.status_id = hdr.status_id\r\n  join wc_CIOT_tag_slab_line as TSL\r\n  on TSL.tag_header_id = hdr.tag_header_id\r\n  group by hdr.[tag_header_id]\r\n      ,hdr.[status_id]\r\n      ,hdr.[lead_uid]\r\n\t  ,wl.lead_name\r\n\t  ,wl.salesrep_id\r\n\t  ,c.first_name + ' ' + c.last_name\r\n      ,[tag_date]\r\n      ,[expiration_date]\r\n\t  , wcts.name\r\n      ,hdr.[created_by]\r\n      ,[fabricator_referal_id]\r\n      ,[tag_reference]\r\n      ,[so_allocated]",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 12,
      gdc_DataExplorerDataID: 10012,
      gdc_DataExplorerDataName: "CIOT Tag Line New Insert",
      gdc_DataExplorerDataQuery:
        "INSERT INTO [dbo].[wc_CIOT_tag_slab_line]\r\n           ([tag_header_id]\r\n           )\r\n     VALUES\r\n           (@TagHeaderID)",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 13,
      gdc_DataExplorerDataID: 10014,
      gdc_DataExplorerDataName: "CIOT Tag Fabricator",
      gdc_DataExplorerDataQuery:
        "SELECT [tag_fabricator_line_id]\r\n      ,[tag_header_id]\r\n      ,[fabricator_id]\r\n      ,tgst.[status_id]\r\n      ,tgst.[name]\r\n      ,[address]\r\n      ,[date_quote_sent]\r\n      ,[email]\r\n      ,[quote_number]\r\n\t  ,c.customer_name\r\n\t  ,a.phys_address1\r\n\t  ,a.phys_address2\r\n\t  ,a.phys_city\r\n\t  ,a.phys_state\r\n\t  ,a.phys_postal_code\r\n\t  ,tfl.email as email_address\r\n  FROM [webconnectdev].[dbo].[wc_CIOT_tag_fabricator_line] as tfl\r\n  join wc_CIOT_fabricator_line_status as tgst\r\n  on tgst.status_id = tfl.status_id\r\n  join customer as c\r\n  on c.customer_id = tfl.fabricator_id\r\n  inner join dbo.address a with(nolock) \r\n  on c.customer_id = a.id",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 14,
      gdc_DataExplorerDataID: 10016,
      gdc_DataExplorerDataName: "Sales Data",
      gdc_DataExplorerDataQuery:
        "select * from (select cl.class_description, \r\nvsh.*, \r\ninvoice_date  as TimeFilter, \r\ncts.first_name + ' ' + cts.last_name as salesRepName ,\r\nvsh.sales_price_home - vsh.cogs_amount_home as Profit,\r\nnullif((vsh.sales_price_home - vsh.cogs_amount_home),0) / nullif(vsh.sales_price_home,0) as ProfitPercent\r\nfrom wc_sales_history_report_view as vsh \r\njoin customer as c on vsh.customer_id = c.customer_id \r\njoin class as cl on c.class_1id = cl.class_id\r\njoin contacts as cts on cts.id = vsh.salesrep_id) as a ",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 15,
      gdc_DataExplorerDataID: 10017,
      gdc_DataExplorerDataName: "Sales Rep Filter",
      gdc_DataExplorerDataQuery:
        "select distinct salesrep_id,\r\ncn.first_name + ' ' + cn.last_name as SalesRep \r\nfrom wc_sales_history_report_view as vsh \r\njoin contacts as cn on vsh.salesrep_id = cn.id",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 16,
      gdc_DataExplorerDataID: 10019,
      gdc_DataExplorerDataName: "Opportunity Data",
      gdc_DataExplorerDataQuery:
        "select o.*, \r\n(o.opportunity_size * o.success_probability)  as FactoredSuccess \r\n, os.opportunity_status_desc\r\nfrom opportunity as o\r\njoin opportunity_status as os\r\non o.opportunity_status_uid = os.opportunity_status_uid \r\n\r\n\r\n",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 17,
      gdc_DataExplorerDataID: 10021,
      gdc_DataExplorerDataName: "Contacts Search",
      gdc_DataExplorerDataQuery: "select * from contacts",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 18,
      gdc_DataExplorerDataID: 10023,
      gdc_DataExplorerDataName: "Contacts Search Extend",
      gdc_DataExplorerDataQuery:
        "SELECT top 5 address.id as ObjectID,\r\n'1' as ObjectType,\r\n'{\r\n\"ID\": \"'+cast(ID as varchar(150))+'\",\r\n\"name\": \"'+[name] +'\",\r\n\"mail_address1\": \"'+isnull(mail_address1 ,'') + '\",\r\n\"mail_city\": \"'+isnull(mail_city ,'') + '\",\r\n\"mail_postal_code\": \"'+isnull(mail_postal_code ,'') + '\",\r\n\"mail_state\": \"'+isnull(mail_state ,'') + '\",\r\n\"url\": \"'+isnull([url] ,'') + '\",\r\n\"central_phone_number\": \"'+isnull(central_phone_number ,'') + '\",\r\n\"name\": \"'+isnull([name] ,'') + '\"\r\n\r\n}' as ObjectData\r\nFROM address\r\nWHERE contains(([name],mail_address1,mail_city, mail_postal_code), @SearchTerm)\r\nunion all\r\nSELECT top 5 cts.id as ObjectID,\r\n'2' as ObjectType,\r\n'{\r\n\"ID\": \"'+cast(ID as varchar(150))+'\",\r\n\"name\": \"'+isnull(cts.first_name + ' ' + cts.last_name ,'') + '\",\r\n\"title\": \"'+isnull(cts.title ,'') + '\",\r\n\"email_address\": \"'+isnull(cts.email_address ,'') + '\",\r\n\"direct_phone\": \"'+isnull(cts.direct_phone ,'') + '\" \r\n}' as ObjectData\r\nFROM contacts as cts\r\nWHERE contains(([first_name],[last_name],[title],cts.email_address,cts.direct_phone), @SearchTerm)",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: true,
      gdc_report_center_source: null
    },
    {
      number: 19,
      gdc_DataExplorerDataID: 10024,
      gdc_DataExplorerDataName: "Contact Free Text",
      gdc_DataExplorerDataQuery:
        "select cl.*,c.* from contacts c\r\njoin  (select * from FREETEXTTABLE(Contacts,(first_name,last_name,title,email_address,direct_phone), @SearchTerm)) as cl\r\non c.id = cl.[key]",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: true,
      gdc_report_center_source: null
    },
    {
      number: 20,
      gdc_DataExplorerDataID: 10025,
      gdc_DataExplorerDataName: "Customer Free Text",
      gdc_DataExplorerDataQuery:
        "select cl.*,c.* from address c\r\njoin  (select * from FREETEXTTABLE([address],([name],central_phone_number, mail_address1, \r\nmail_city,mail_state, mail_postal_code), @SearchTerm)) as cl\r\non c.id = cl.[key]",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: true,
      gdc_report_center_source: null
    },
    {
      number: 21,
      gdc_DataExplorerDataID: 10026,
      gdc_DataExplorerDataName: "Salutations",
      gdc_DataExplorerDataQuery: "select * from salutation",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 22,
      gdc_DataExplorerDataID: 10027,
      gdc_DataExplorerDataName: "Update Contacts",
      gdc_DataExplorerDataQuery:
        "update contacts\r\nset first_name = @first_name,\r\nlast_name = @last_name,\r\ntitle = @title,\r\nemail_address = @email_address,\r\ndirect_phone = @direct_phone\r\nWHERE id = @id",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 23,
      gdc_DataExplorerDataID: 10028,
      gdc_DataExplorerDataName: "Delete Contacts",
      gdc_DataExplorerDataQuery:
        "update contacts\r\nset delete_flag = 'Y'\r\nWHERE id = @id",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 24,
      gdc_DataExplorerDataID: 10029,
      gdc_DataExplorerDataName: "Contact Email Search",
      gdc_DataExplorerDataQuery: "select * from WC_ContactEmailArchive",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 25,
      gdc_DataExplorerDataID: 10030,
      gdc_DataExplorerDataName: "Contact Overview Data",
      gdc_DataExplorerDataQuery:
        "select c1.*,\r\nc.customer_name, c.customer_id,\r\nca.phys_address1,\r\nca.phys_state,\r\nca.phys_postal_code,\r\nca.url as CustomerUrl,\r\nca.central_phone_number,\r\ncnp.note,\r\ncnp.topic,\r\ncEma.*\r\nfrom contacts c1 with(nolock)\r\n left join contacts_x_ship_to cst with(nolock)\r\n on cst.contact_id = c1.id\r\n left join ship_to st with(nolock)\r\n on cst.ship_to_id = st.ship_to_id\r\n left join ship_to_salesrep sr with(nolock) \r\n on (st.ship_to_id = sr.ship_to_id and sr.delete_flag = 'N' )\r\n left join customer as c with(nolock)\r\n on c.customer_id = st.customer_id\r\n left join [address] as ca with(nolock)\r\n on c.customer_id = ca.id\r\n left join customer_notepad as cnp\r\n on cnp.customer_id = c.customer_id\r\n left join WC_ContactEmailArchive as cEma\r\n on cEma.ContactEmailAddress = c1.email_address",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 26,
      gdc_DataExplorerDataID: 10031,
      gdc_DataExplorerDataName: "Customer Notes",
      gdc_DataExplorerDataQuery: "select * from customer_notepad",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 27,
      gdc_DataExplorerDataID: 10032,
      gdc_DataExplorerDataName: "Customer Emails",
      gdc_DataExplorerDataQuery: "select * from WC_ContactEmailArchive",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 28,
      gdc_DataExplorerDataID: 10033,
      gdc_DataExplorerDataName: "Customer Sales",
      gdc_DataExplorerDataQuery: "select * from wc_sales_history_report_view",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 29,
      gdc_DataExplorerDataID: 10034,
      gdc_DataExplorerDataName: "Contact List Edit Email",
      gdc_DataExplorerDataQuery:
        "SELECT DISTINCT c.id \r\n, c.first_name \r\n, c.last_name \r\n, c.title \r\n, c.direct_phone \r\n, c.phone_ext \r\n, c.cellular \r\n, c.email_address \r\n, c.address_name as AddressName \r\n, customer_id \r\n, 0 as supplier_id \r\n, c.delete_flag \r\n, crm_contact_information.last_hard_touch_date \r\n, crm_contact_information.last_maintained_by as last_hard_touch_by \r\n, crm_contact_information.activity_trans_no \r\n FROM \r\n(select c1.*, st.customer_id\r\nfrom contacts_x_ship_to cst with(nolock) \r\n inner join contacts c1 with(nolock) \r\n on cst.contact_id = c1.id \r\n inner join ship_to st with(nolock) \r\n on cst.ship_to_id = st.ship_to_id \r\n  \r\n UNION ALL \r\n select c2.*,cc.customer_id\r\n from oe_contacts_customer cc with(nolock) \r\n inner join contacts c2 with(nolock) \r\n on cc.contact_id = c2.id \r\n \r\n) c \r\n left join crm_contact_information with(nolock) \r\n on (c.id = crm_contact_information.entity_link_id_char and crm_contact_information.entity_type_cd = 1553)",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 30,
      gdc_DataExplorerDataID: 10035,
      gdc_DataExplorerDataName: "Email Archive",
      gdc_DataExplorerDataQuery:
        "select distinct\r\n\r\n\t\t\ta.email_uid \r\n\t\t\t--, ac.contact_id \r\n\t\t\t--, ac.is_from \r\n\t\t\t, a.email_from \r\n\t\t\t, a.email_to \r\n\t\t\t, a.email_cc \r\n\t\t\t, a.subject \r\n\t\t\t, replace(a.body, '\\\"', '\"') as body\r\n\t\t\t, a.date_sent \r\n\t\t\t, a.date_received \r\n\t\t\t, a.importance \r\n\t\t\t, a.has_attachments \r\n\t\t\t, coalesce(c.first_name, '') + ' ' + coalesce(c.last_name, '') from_name\r\n\t\t\t--, c.last_name from_last_name\r\n\t\t\t--, c.email_address\r\n\r\n\t\t\tfrom wc_email_archive a with(nolock) \r\n\r\n\t\t\tinner join wc_email_archive_x_contact ac with(nolock) on a.email_uid = ac.email_uid \r\n\t\t\tleft join contacts c with(nolock) on a.email_from = c.email_address \r\n\r\n\t\t\twhere a.parsed = 1 ",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: true,
      gdc_report_center_source: null
    },
    {
      number: 31,
      gdc_DataExplorerDataID: 10036,
      gdc_DataExplorerDataName: "DataExplorer DataSource",
      gdc_DataExplorerDataQuery: "SELECT *\r\n  FROM [gdc_DataExplorerData]",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 32,
      gdc_DataExplorerDataID: 10037,
      gdc_DataExplorerDataName: "Customer Search",
      gdc_DataExplorerDataQuery:
        "select * from customer where delete_flag = 'N' ",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 33,
      gdc_DataExplorerDataID: 10038,
      gdc_DataExplorerDataName: "Customer Items",
      gdc_DataExplorerDataQuery:
        "select * from inv_xref where delete_flag = 'N'\r\n",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 34,
      gdc_DataExplorerDataID: 10039,
      gdc_DataExplorerDataName: "Barcode Options",
      gdc_DataExplorerDataQuery: "select * from gdc_BarcodeLineOptions",
      gdc_DataExplorerDataModel: " ",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 35,
      gdc_DataExplorerDataID: 10040,
      gdc_DataExplorerDataName: "product_groups",
      gdc_DataExplorerDataQuery: "select * from product_group",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 36,
      gdc_DataExplorerDataID: 10041,
      gdc_DataExplorerDataName: "corporate_accounts",
      gdc_DataExplorerDataQuery: "select * from customer",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 37,
      gdc_DataExplorerDataID: 10042,
      gdc_DataExplorerDataName: "goal_data",
      gdc_DataExplorerDataQuery: "select * from wc_product_group_goal",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 38,
      gdc_DataExplorerDataID: 10043,
      gdc_DataExplorerDataName: "salesGoals",
      gdc_DataExplorerDataQuery:
        "select wl.year_for_period, SUBSTRING('JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC ', (wl.period * 4) - 3, 3) as MonthName, \r\nwl.period, \r\na.id,\r\na.name,\r\nwl.product_group_id, \r\nsum(wl.extended_price) * .01 as cySales ,\r\nprevtotal * .01 as prevSales,\r\nsum(case when wl.period = 3 THEN wl.extended_price* .01 else 0 END) as mtdSales,\r\ncase when wl.period = 3 THEN prevtotal * .01 else 0 END  as prevmtdSales\r\nfrom wc_flat_invoice_line as wl  with(nolock)\r\njoin address a with(nolock)\r\non wl.corp_address_id = a.corp_address_id\r\nleft join (select year_for_period,period, a.name,product_group_id,\r\nsum(wl.extended_price) as prevtotal\r\nfrom wc_flat_invoice_line as wl  with(nolock)\r\njoin address a with(nolock)\r\non wl.corp_address_id = a.corp_address_id where period < 4 group by year_for_period,period, a.name,product_group_id ) as prv\r\non prv.period = wl.period\r\nand prv.year_for_period = wl.year_for_period -1\r\nand prv.product_group_id = wl.product_group_id\r\nand prv.name = a.name\r\nwhere wl.year_for_period = 2014\r\ngroup by wl.year_for_period,wl.period, a.name,wl.product_group_id,prevtotal , a.id",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 39,
      gdc_DataExplorerDataID: 10044,
      gdc_DataExplorerDataName: "accounts",
      gdc_DataExplorerDataQuery:
        "select a.id,a.name from address\r\njoin address a\r\non a.id = address.id ",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 40,
      gdc_DataExplorerDataID: 10045,
      gdc_DataExplorerDataName: "productGroups",
      gdc_DataExplorerDataQuery: "select * from product_group",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 41,
      gdc_DataExplorerDataID: 10046,
      gdc_DataExplorerDataName: "salesReps",
      gdc_DataExplorerDataQuery:
        "select id as salesrep_id, first_name + ' ' + last_name as salesrep  from contacts\r\nwhere salesrep = 'Y'",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 42,
      gdc_DataExplorerDataID: 10047,
      gdc_DataExplorerDataName: "salesGridGoals",
      gdc_DataExplorerDataQuery:
        "select wl.year_for_period, SUBSTRING('JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC ', (wl.period * 4) - 3, 3) as MonthName, \r\nwl.period, \r\na.id,\r\na.name,\r\nwl.product_group_id, \r\nsum(wl.extended_price) * .01 as cySales ,\r\nprevtotal * .01 as prevSales,\r\nsum(case when wl.period = 3 THEN wl.extended_price* .01 else 0 END) as mtdSales,\r\ncase when wl.period = 3 THEN prevtotal * .01 else 0 END  as prevmtdSales\r\nfrom wc_flat_invoice_line as wl  with(nolock)\r\njoin address a with(nolock)\r\non wl.corp_address_id = a.corp_address_id\r\nleft join (select year_for_period,period, a.name,product_group_id,\r\nsum(wl.extended_price) as prevtotal\r\nfrom wc_flat_invoice_line as wl  with(nolock)\r\njoin address a with(nolock)\r\non wl.corp_address_id = a.corp_address_id where period < 4 group by year_for_period,period, a.name,product_group_id ) as prv\r\non prv.period = wl.period\r\nand prv.year_for_period = wl.year_for_period -1\r\nand prv.product_group_id = wl.product_group_id\r\nand prv.name = a.name\r\nwhere wl.year_for_period = 2014\r\ngroup by wl.year_for_period,wl.period, a.name,wl.product_group_id,prevtotal , a.id",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 43,
      gdc_DataExplorerDataID: 10048,
      gdc_DataExplorerDataName: "salesGoalEntryData",
      gdc_DataExplorerDataQuery:
        "SELECT  isnull(wc_goal_year,'2019') as wc_goal_year, customer_id, \r\n       customer_name, \r\n       [1], \r\n       [2], \r\n       [3], \r\n       [4], \r\n       [5], \r\n       [6], \r\n       [7], \r\n       [8], \r\n       [9], \r\n       [10], \r\n       [11], \r\n       [12] , \r\n      isnull(wc_goal_product_group_id,'All') as product_group_id \r\nFROM   ( \r\n                 SELECT    wc_goal_year,wc_goal_month,customer_id, \r\n                           customer_name, \r\n                           wc_goal_amount, \r\n                           wc_product_group_goal.wc_goal_product_group_id \r\n                 FROM      customer WITH(nolock) \r\n                 LEFT JOIN wc_product_group_goal WITH(nolock) \r\n                 ON        customer.customer_id = wc_product_group_goal.wc_goal_corporate_id \r\n                 LEFT JOIN product_group WITH(nolock) \r\n                 ON        product_group.product_group_id = wc_product_group_goal.wc_goal_product_group_id) as p pivot ( sum (wc_goal_amount) FOR wc_goal_month IN ( [1],\r\n                                                                                                                                                      [2],\r\n                                                                                                                                                      [3],\r\n                                                                                                                                                      [4],\r\n                                                                                                                                                      [5],\r\n                                                                                                                                                      [6],\r\n                                                                                                                                                      [7],\r\n                                                                                                                                                      [8],\r\n                                                                                                                                                      [9],\r\n                                                                                                                                                      [10],\r\n                                                                                                                                                      [11],\r\n                                                                                                                                                      [12] ) )  AS pvt\r\n",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 44,
      gdc_DataExplorerDataID: 10049,
      gdc_DataExplorerDataName: "updateGoalData",
      gdc_DataExplorerDataQuery:
        "DECLARE @cnt int\r\nset @cnt = (select count(*) from wc_product_group_goal where \r\nwc_goal_corporate_id = @CustomerID and\r\nwc_goal_product_group_id = @ProductID and\r\nwc_goal_year = @GoalYear)\r\n\r\nIF @cnt = 0 \r\nBEGIN\r\nINSERT INTO [dbo].[wc_product_group_goal]\r\n           ([wc_goal_corporate_id]\r\n           ,[wc_goal_product_group_id]\r\n           ,[wc_goal_year]\r\n           ,[wc_goal_month]\r\n           ,[wc_goal_amount])\r\n     VALUES\r\n           (@CustomerID\r\n           ,@ProductID\r\n           ,@GoalYear\r\n           ,1\r\n           ,@GoalAmount1)\r\nINSERT INTO [dbo].[wc_product_group_goal]\r\n           ([wc_goal_corporate_id]\r\n           ,[wc_goal_product_group_id]\r\n           ,[wc_goal_year]\r\n           ,[wc_goal_month]\r\n           ,[wc_goal_amount])\r\n     VALUES\r\n           (@CustomerID\r\n           ,@ProductID\r\n           ,@GoalYear\r\n           ,2\r\n           ,@GoalAmount2)\r\nINSERT INTO [dbo].[wc_product_group_goal]\r\n           ([wc_goal_corporate_id]\r\n           ,[wc_goal_product_group_id]\r\n           ,[wc_goal_year]\r\n           ,[wc_goal_month]\r\n           ,[wc_goal_amount])\r\n     VALUES\r\n           (@CustomerID\r\n           ,@ProductID\r\n           ,@GoalYear\r\n           ,3\r\n           ,@GoalAmount3)\r\nINSERT INTO [dbo].[wc_product_group_goal]\r\n           ([wc_goal_corporate_id]\r\n           ,[wc_goal_product_group_id]\r\n           ,[wc_goal_year]\r\n           ,[wc_goal_month]\r\n           ,[wc_goal_amount])\r\n     VALUES\r\n           (@CustomerID\r\n           ,@ProductID\r\n           ,@GoalYear\r\n           ,4\r\n           ,@GoalAmount4)\r\nINSERT INTO [dbo].[wc_product_group_goal]\r\n           ([wc_goal_corporate_id]\r\n           ,[wc_goal_product_group_id]\r\n           ,[wc_goal_year]\r\n           ,[wc_goal_month]\r\n           ,[wc_goal_amount])\r\n     VALUES\r\n           (@CustomerID\r\n           ,@ProductID\r\n           ,@GoalYear\r\n           ,5\r\n           ,@GoalAmount5)\r\nINSERT INTO [dbo].[wc_product_group_goal]\r\n           ([wc_goal_corporate_id]\r\n           ,[wc_goal_product_group_id]\r\n           ,[wc_goal_year]\r\n           ,[wc_goal_month]\r\n           ,[wc_goal_amount])\r\n     VALUES\r\n           (@CustomerID\r\n           ,@ProductID\r\n           ,@GoalYear\r\n           ,6\r\n           ,@GoalAmount6)\r\nINSERT INTO [dbo].[wc_product_group_goal]\r\n           ([wc_goal_corporate_id]\r\n           ,[wc_goal_product_group_id]\r\n           ,[wc_goal_year]\r\n           ,[wc_goal_month]\r\n           ,[wc_goal_amount])\r\n     VALUES\r\n           (@CustomerID\r\n           ,@ProductID\r\n           ,@GoalYear\r\n           ,7\r\n           ,@GoalAmount7)\r\nINSERT INTO [dbo].[wc_product_group_goal]\r\n           ([wc_goal_corporate_id]\r\n           ,[wc_goal_product_group_id]\r\n           ,[wc_goal_year]\r\n           ,[wc_goal_month]\r\n           ,[wc_goal_amount])\r\n     VALUES\r\n           (@CustomerID\r\n           ,@ProductID\r\n           ,@GoalYear\r\n           ,8\r\n           ,@GoalAmount8)\r\nINSERT INTO [dbo].[wc_product_group_goal]\r\n           ([wc_goal_corporate_id]\r\n           ,[wc_goal_product_group_id]\r\n           ,[wc_goal_year]\r\n           ,[wc_goal_month]\r\n           ,[wc_goal_amount])\r\n     VALUES\r\n           (@CustomerID\r\n           ,@ProductID\r\n           ,@GoalYear\r\n           ,9\r\n           ,@GoalAmount9)\r\nINSERT INTO [dbo].[wc_product_group_goal]\r\n           ([wc_goal_corporate_id]\r\n           ,[wc_goal_product_group_id]\r\n           ,[wc_goal_year]\r\n           ,[wc_goal_month]\r\n           ,[wc_goal_amount])\r\n     VALUES\r\n           (@CustomerID\r\n           ,@ProductID\r\n           ,@GoalYear\r\n           ,10\r\n           ,@GoalAmount10)\r\nINSERT INTO [dbo].[wc_product_group_goal]\r\n           ([wc_goal_corporate_id]\r\n           ,[wc_goal_product_group_id]\r\n           ,[wc_goal_year]\r\n           ,[wc_goal_month]\r\n           ,[wc_goal_amount])\r\n     VALUES\r\n           (@CustomerID\r\n           ,@ProductID\r\n           ,@GoalYear\r\n           ,11\r\n           ,@GoalAmount11)\r\nINSERT INTO [dbo].[wc_product_group_goal]\r\n           ([wc_goal_corporate_id]\r\n           ,[wc_goal_product_group_id]\r\n           ,[wc_goal_year]\r\n           ,[wc_goal_month]\r\n           ,[wc_goal_amount])\r\n     VALUES\r\n           (@CustomerID\r\n           ,@ProductID\r\n           ,@GoalYear\r\n           ,12\r\n           ,@GoalAmount12)\r\n\r\nEND\r\nELSE\r\nBEGIN\r\nUPDATE wc_product_group_goal\r\nSET wc_goal_amount = @GoalAmount1\r\nwhere \r\nwc_goal_corporate_id = @CustomerID and\r\nwc_goal_product_group_id = @ProductID and\r\nwc_goal_year = @GoalYear and\r\nwc_goal_month = 1\r\nUPDATE wc_product_group_goal\r\nSET wc_goal_amount = @GoalAmount2\r\nwhere \r\nwc_goal_corporate_id = @CustomerID and\r\nwc_goal_product_group_id = @ProductID and\r\nwc_goal_year = @GoalYear and\r\nwc_goal_month = 2\r\nUPDATE wc_product_group_goal\r\nSET wc_goal_amount = @GoalAmount3\r\nwhere \r\nwc_goal_corporate_id = @CustomerID and\r\nwc_goal_product_group_id = @ProductID and\r\nwc_goal_year = @GoalYear and\r\nwc_goal_month = 3\r\nUPDATE wc_product_group_goal\r\nSET wc_goal_amount = @GoalAmount4\r\nwhere \r\nwc_goal_corporate_id = @CustomerID and\r\nwc_goal_product_group_id = @ProductID and\r\nwc_goal_year = @GoalYear and\r\nwc_goal_month = 4\r\nUPDATE wc_product_group_goal\r\nSET wc_goal_amount = @GoalAmount5\r\nwhere \r\nwc_goal_corporate_id = @CustomerID and\r\nwc_goal_product_group_id = @ProductID and\r\nwc_goal_year = @GoalYear and\r\nwc_goal_month = 5\r\nUPDATE wc_product_group_goal\r\nSET wc_goal_amount = @GoalAmount6\r\nwhere \r\nwc_goal_corporate_id = @CustomerID and\r\nwc_goal_product_group_id = @ProductID and\r\nwc_goal_year = @GoalYear and\r\nwc_goal_month = 6\r\nUPDATE wc_product_group_goal\r\nSET wc_goal_amount = @GoalAmount7\r\nwhere \r\nwc_goal_corporate_id = @CustomerID and\r\nwc_goal_product_group_id = @ProductID and\r\nwc_goal_year = @GoalYear and\r\nwc_goal_month = 7\r\nUPDATE wc_product_group_goal\r\nSET wc_goal_amount = @GoalAmount8\r\nwhere \r\nwc_goal_corporate_id = @CustomerID and\r\nwc_goal_product_group_id = @ProductID and\r\nwc_goal_year = @GoalYear and\r\nwc_goal_month = 8\r\nUPDATE wc_product_group_goal\r\nSET wc_goal_amount = @GoalAmount9\r\nwhere \r\nwc_goal_corporate_id = @CustomerID and\r\nwc_goal_product_group_id = @ProductID and\r\nwc_goal_year = @GoalYear and\r\nwc_goal_month = 9\r\nUPDATE wc_product_group_goal\r\nSET wc_goal_amount = @GoalAmount10\r\nwhere \r\nwc_goal_corporate_id = @CustomerID and\r\nwc_goal_product_group_id = @ProductID and\r\nwc_goal_year = @GoalYear and\r\nwc_goal_month = 10\r\nUPDATE wc_product_group_goal\r\nSET wc_goal_amount = @GoalAmount11\r\nwhere \r\nwc_goal_corporate_id = @CustomerID and\r\nwc_goal_product_group_id = @ProductID and\r\nwc_goal_year = @GoalYear and\r\nwc_goal_month = 11\r\nUPDATE wc_product_group_goal\r\nSET wc_goal_amount = @GoalAmount12\r\nwhere \r\nwc_goal_corporate_id = @CustomerID and\r\nwc_goal_product_group_id = @ProductID and\r\nwc_goal_year = @GoalYear and\r\nwc_goal_month = 12\r\n\r\n\r\n\r\nEND",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 45,
      gdc_DataExplorerDataID: 10050,
      gdc_DataExplorerDataName: "TreeView DataSource",
      gdc_DataExplorerDataQuery:
        "select at.*, wat.parent_activity_trans_no, activity_desc, isnull(cntTotalTasks,0) as cntTotalTasks from activity_trans at with(nolock)\r\n left join wc_activity_trans_hierarchy wat with(nolock)\r\non at.activity_trans_no = wat.activity_trans_no\r\nleft join activity a with(nolock)\r\non a. activity_id = at.activity_id\r\nleft join (select count(*) as cntTotalTasks, parent_activity_trans_no from wc_activity_trans_hierarchy group by parent_activity_trans_no) as cntTotal\r\non cntTotal.parent_activity_trans_no = wat.activity_trans_no",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 46,
      gdc_DataExplorerDataID: 10051,
      gdc_DataExplorerDataName: "lastYearProductGroupSales",
      gdc_DataExplorerDataQuery:
        "select sum(extended_price) as totalProductGroupLY, \r\nproduct_group_id,\r\ncustomer_id \r\nfrom wc_flat_invoice_line with(nolock) \r\ngroup by customer_id,product_group_id",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 47,
      gdc_DataExplorerDataID: 10052,
      gdc_DataExplorerDataName: "goalAdmin",
      gdc_DataExplorerDataQuery:
        "select *, c.first_name + ' ' + c.last_name as salesrepname from wc_product_group_goal_admin as wpa with(nolock)\r\nleft join contacts c with(nolock)\r\non c.id = wpa.wc_target_salesrep",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 48,
      gdc_DataExplorerDataID: 10053,
      gdc_DataExplorerDataName: "targetAdminUpdate",
      gdc_DataExplorerDataQuery:
        "DECLARE @cnt int\r\nset @cnt = (select count(*) from wc_product_group_goal_admin where \r\nwc_target_year = @targetYear and\r\nwc_target_level = @targetLevel and\r\nwc_target_salesrep = @targetSalesrep)\r\n\r\nIF @cnt = 0 \r\nBEGIN\r\nINSERT INTO [dbo].[wc_product_group_goal_admin]\r\n           ([wc_target_year]\r\n           ,[wc_target_level]\r\n           ,[wc_target_growth_percent] \r\n           ,[wc_target_salesrep], wc_target_level_id)\r\n     VALUES\r\n           (@targetYear\r\n           ,@targetLevel\r\n           ,@targetGrowthAmount \r\n           ,@targetSalesrep, '1')\r\n \r\n\r\nEND\r\nELSE\r\nBEGIN\r\nUPDATE wc_product_group_goal_admin\r\nSET wc_target_growth_percent = @targetGrowthAmount\r\nwhere \r\nwc_target_year = @targetYear and\r\nwc_target_level = @targetLevel and\r\nwc_target_salesrep = @targetSalesrep\r\n\r\nEND",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 49,
      gdc_DataExplorerDataID: 10054,
      gdc_DataExplorerDataName: "targetAdminDelete",
      gdc_DataExplorerDataQuery:
        "delete from wc_product_group_goal_admin\r\nwhere wc_target_id = @targetID",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 50,
      gdc_DataExplorerDataID: 10055,
      gdc_DataExplorerDataName: "Add DataSource",
      gdc_DataExplorerDataQuery:
        "INSERT INTO [dbo].[gdc_DataExplorerData] ( \r\n\t\t\t[gdc_DataExplorerDataName]             ,\r\n\t\t\t[gdc_DataExplorerDataQuery]             ,\r\n\t\t\t[gdc_DataExplorerDataModel]             ,\r\n\t\t\t[gdc_DataExplorerDataExistingParameter] )       \r\n\t\t\tVALUES( @DataSourceName,\r\n\t\t\t@DataSourceQuery ,\r\n\t\t\t@DataSourceModel ,\r\n\t\t\t0,\r\n\t\t\tnull)",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 51,
      gdc_DataExplorerDataID: 10056,
      gdc_DataExplorerDataName: "availableReports",
      gdc_DataExplorerDataQuery:
        "select cast(GridBaseState as varchar(max)) as reportStructure from gdc_Grid\r\nwhere cast(GridBaseState as varchar(max)) like '%reportID%'",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 52,
      gdc_DataExplorerDataID: 10057,
      gdc_DataExplorerDataName: "OrderRelease",
      gdc_DataExplorerDataQuery:
        "select h.ship2_name \r\n, h.address_id as ship_to_id \r\n, i.item_id  \r\n, i.inv_mast_uid \r\n, l.extended_price \r\n, l.required_date \r\nfrom oe_line l with(nolock) \r\ninner join oe_hdr h with(nolock) on (l.order_no = h.order_no) \r\ninner join inv_mast i with(nolock) on (l.inv_mast_uid = i.inv_mast_uid) \r\nwhere (h.delete_flag = 'N') \r\n       and (h.completed = 'N') \r\n       and (coalesce(h.order_type, 0) NOT IN (1343)) \r\n       --and (coalesce(job_price_hdr.consignment_flag, 'N') = 'N') \r\n       and (l.delete_flag = 'N') \r\n       and (l.parent_oe_line_uid = 0) \r\n       and (coalesce(l.complete, 'N') = 'N') \r\n       and (coalesce(i.product_type, '') <> 'B')",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 53,
      gdc_DataExplorerDataID: 10058,
      gdc_DataExplorerDataName: "InvoiceData",
      gdc_DataExplorerDataQuery:
        "select bill2_name, invoice_no, invoice_date, total_amount from invoice_hdr",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: false
    },
    {
      number: 54,
      gdc_DataExplorerDataID: 10061,
      gdc_DataExplorerDataName: "wcSalesAnalysisOriginal",
      gdc_DataExplorerDataQuery:
        " \r\n\r\nIF @cost_method = 'cogs_amount' BEGIN SET @cost_method = 'cogs_amount_home' END\r\nIF @cost_method = 'commission_cost' BEGIN SET @cost_method = 'commission_cost_home' END\r\nIF @cost_method = 'other_cost' BEGIN SET @cost_method = 'other_cost_home' END\r\n\r\nDECLARE @start_year_period int\r\nDECLARE @end_year_period int\r\n\r\nSET @start_year_period = LEFT(CONVERT(varchar, @beginning_date,112),6)\r\nSET @end_year_period = LEFT(CONVERT(varchar, @ending_date,112),6)\r\n\r\nDECLARE @COLUMNS as VARCHAR(MAX)\r\nDECLARE @SQL AS VARCHAR(MAX)\r\nDECLARE @PIVOTCOLUMN AS VARCHAR(255) SET @PIVOTCOLUMN = 'wc_flat_invoice_line.company_no as [Company ID], company.company_name as [Company Name]'\r\n\r\nIF @pivot_by = 'salesrep' SET @PIVOTCOLUMN = 'contacts.id as [ID], contacts.first_name + '' '' + contacts.last_name as [Sales Rep Name]'\r\nIF @pivot_by = 'company' SET @PIVOTCOLUMN = 'wc_flat_invoice_line.company_no as [ID], company.company_name as [Company Name]'\r\nIF @pivot_by = 'product_group' SET @PIVOTCOLUMN = 'product_group.product_group_id as [ID], product_group.product_group_desc as [Product Group]'\r\nIF @pivot_by = 'supplier' SET @PIVOTCOLUMN = 'supplier.supplier_id as [ID], supplier.supplier_name as [Supplier Name]'\r\nIF @pivot_by = 'location' SET @PIVOTCOLUMN = 'coalesce(location.location_id, 0) as [ID], coalesce(location.location_name, '''') as [Location Name]'\r\nIF @pivot_by = 'customer' SET @PIVOTCOLUMN = 'customer.customer_id as [ID], customer.customer_name as [Customer Name]'\r\nIF @pivot_by = 'branch' SET @PIVOTCOLUMN = 'branch.branch_id AS [ID], branch.branch_description as [Branch Name]' \r\nIF @pivot_by = 'ship_to' SET @PIVOTCOLUMN = 'wc_flat_invoice_line.ship_to_id as [ID], address.name as [Ship To Name]' \r\nIF @pivot_by = 'item_id' SET @PIVOTCOLUMN = 'inv_mast.item_id as [ID], inv_mast.item_desc as [Item Description]' \r\nIF @pivot_by = 'contact_id' SET @PIVOTCOLUMN = 'coalesce(contacts_2.id, ''0'') as [ID], coalesce(contacts_2.first_name + '' '' + contacts_2.last_name + '' - '' + contacts_2.address_name, ''No contact assigned'') as [Contact Name]'\r\nIF @pivot_by = 'corp_id' SET @PIVOTCOLUMN =  'corp_id.address_id [ID], corp_id.address_name as [Corp Name]'\r\n\r\nDECLARE @COLUMNSTRING varchar(255)\r\nIF @view_by = 0\r\n\tBEGIN\r\n\t\tSET @COLUMNSTRING = 'year_period'\r\n\t\tSELECT @COLUMNS = COALESCE(@COLUMNS + ',','') + QUOTENAME(MonthYear)\r\n\t\tFROM\r\n\t\t(\r\n\t\t\tSELECT year_period AS MonthYear from wc_year_period\r\n\t\t\tWHERE year_period between @start_year_period and @end_year_period \r\n\t\t) AS MONTHSTEST \r\n\t\tORDER BY MonthYear\r\n\tEND\r\nIF @view_by = 1\r\n\tBEGIN\r\n\t\tset @COLUMNSTRING = 'year_for_period'\r\n\t\tSET @beginning_date = CONVERT(VARCHAR, DATEADD(YEAR, DATEDIFF(YEAR, 0, DATEADD(YEAR, -1, CONVERT(DATETIME,@ending_date))), 0), 101)\r\n\t\tSELECT @COLUMNS = \r\n\t\tCOALESCE(@COLUMNS + ',','') + QUOTENAME(MonthYear)\r\n\t\tFROM\r\n\t\t(\r\n\t\t\tSELECT DISTINCT LEFT(CONVERT(VARCHAR, wc_year_period.year_period, 112),4) AS MonthYear FROM wc_year_period\r\n\t\t\tWHERE year_period between @start_year_period and @end_year_period\r\n\t\t) AS MONTHSTEST\r\n\t\tORDER BY MonthYear\r\n\tEND\r\nIF @view_by = 2\r\n\tBEGIN\r\n\t\tDECLARE @yearOneEndingDate as VARCHAR(10)\r\n\t\tSET @yearOneEndingDate = LEFT(CONVERT(VARCHAR, DATEADD(MM, -11, CONVERT(DATETIME, @ending_date)), 112),6)\r\n\t\tSET @COLUMNSTRING = 'CASE WHEN wc_flat_invoice_line.year_period < ' + CONVERT(VARCHAR, @yearOneEndingDate) + ' THEN ''Prior 12 Months'' ELSE ''Current 12 Months'' END' \r\n\t\tSELECT @COLUMNS = '[Prior 12 Months],[Current 12 Months]'\r\n\tEND\r\n\r\nDECLARE @VALUECOLUMN VARCHAR(225)\r\nDECLARE @VALUECOLUMNNAME VARCHAR(50) \r\nSET @VALUECOLUMN = 'extended_price_home'\r\nSET @VALUECOLUMNNAME = 'extended_price_home'\r\nIF @gp = 1 \r\n\tBEGIN\r\n\t\tSET @VALUECOLUMN ='wc_flat_invoice_line.extended_price_home - (' + @cost_method + ' ) AS profit_dollars' \r\n\t\tSET @VALUECOLUMNNAME = 'profit_dollars'\r\n\tEND\r\nIF @gp = 2\r\n\tBEGIN\r\n\t\tSET @VALUECOLUMN = 'case wc_flat_invoice_line.extended_price_home when 0 then 0 else (wc_flat_invoice_line.extended_price_home - (' + @cost_method + ')) / wc_flat_invoice_line.extended_price_home *.01 end AS profit_percent'\r\n\t\tSET @VALUECOLUMNNAME = 'profit_percent'\r\n\tEND\r\nSELECT @SQL =\r\n'SELECT\t*  \r\nFROM\r\n\t(\r\nSELECT ' +\r\n    @PIVOTCOLUMN + ', ' + @VALUECOLUMN + ', ' + @COLUMNSTRING + ' AS MonthYear \r\n\t\r\nFROM wc_flat_invoice_line with(nolock)\r\nINNER JOIN customer with(nolock)\r\nON (wc_flat_invoice_line.customer_id = customer.customer_id and wc_flat_invoice_line.company_no = customer.company_id)\r\nINNER JOIN branch with(nolock)\r\nON (wc_flat_invoice_line.branch_id = branch.branch_id and wc_flat_invoice_line.company_no = branch.company_id)\r\nLEFT JOIN product_group with(nolock)\r\nON (wc_flat_invoice_line.product_group_id = product_group.product_group_id and wc_flat_invoice_line.company_no = product_group.company_id and product_group.delete_flag = ''N'')\r\nLEFT JOIN supplier with(nolock)\r\nON wc_flat_invoice_line.supplier_id = supplier.supplier_id\r\nINNER JOIN company with(nolock)\r\non wc_flat_invoice_line.company_no = company.company_id \r\nLEFT JOIN location with(nolock) \r\nON wc_flat_invoice_line.sales_location_id = location.location_id and wc_flat_invoice_line.company_no = location.company_id \r\nINNER JOIN address with(nolock) \r\nON wc_flat_invoice_line.ship_to_id = address.id\r\nLEFT JOIN inv_mast with(nolock)\r\nON wc_flat_invoice_line.inv_mast_uid = inv_mast.inv_mast_uid\r\nLEFT JOIN ship_to_salesrep with(nolock) \r\nON (wc_flat_invoice_line.ship_to_id = ship_to_salesrep.ship_to_id and wc_flat_invoice_line.company_no = ship_to_salesrep.company_id and ship_to_salesrep.primary_salesrep = ''Y'' and ship_to_salesrep.delete_flag = ''N'' and ' + CONVERT(VARCHAR, @filter_by_ship_to_salesrep) + ' = 1)\r\nLEFT JOIN wc_sales_manager_x_salesrep with(nolock)\r\non ((wc_flat_invoice_line.primary_salesrep_id = wc_sales_manager_x_salesrep.salesrep_id and ' + @sales_manager_id + '<> ''0'' and ' + CONVERT(VARCHAR, @filter_by_ship_to_salesrep) + ' = 0) or (ship_to_salesrep.salesrep_id = wc_sales_manager_x_salesrep.salesrep_id and ' + @sales_manager_id + '<> ''0'' and ' + CONVERT(VARCHAR, @filter_by_ship_to_salesrep) + ' = 1))\r\n\r\nLEFT JOIN contacts with(nolock)\r\nON ((wc_flat_invoice_line.primary_salesrep_id = contacts.id and ' + CONVERT(VARCHAR, @filter_by_ship_to_salesrep) + ' = 0) or (ship_to_salesrep.salesrep_id = contacts.id and ' + CONVERT(VARCHAR, @filter_by_ship_to_salesrep) + ' = 1))\r\n\r\nLEFT JOIN contacts contacts_2 with(nolock) \r\nON (wc_flat_invoice_line.contact_id = contacts_2.id)\r\n\r\nLEFT JOIN corp_id with(nolock) \r\nON (wc_flat_invoice_line.corp_address_id = corp_id.address_id)\r\nWHERE \r\n(wc_flat_invoice_line.year_period between ' + CONVERT(VARCHAR, @start_year_period) + ' and ' + CONVERT(VARCHAR, @end_year_period) + ')\r\n\t--AND (''' + @customer_id + ''' = ''0'' OR wc_flat_invoice_line.customer_id  in (select id from wc_list_to_tbl(''' + @supplier_id + ''')) )\r\n\t--AND (''' + @salesrep_id + ''' = ''0'' OR (' + CONVERT(VARCHAR, @filter_by_ship_to_salesrep) + ' = 0 and wc_flat_invoice_line.primary_salesrep_id = ''' + @salesrep_id + ''') or (' + CONVERT(VARCHAR, @filter_by_ship_to_salesrep) + ' = 1 and ship_to_salesrep.salesrep_id = ''' + @salesrep_id + '''))\r\n\t--AND (''' + @class_1id + ''' = '''' OR customer.class_1id   in (select id from wc_list_to_tbl(''' + @class_1id + '''))  )\r\n\t--AND (''' + @class_2id + ''' = '''' OR customer.class_2id in (select id from wc_list_to_tbl(''' + @class_2id + ''')) )\r\n\t--AND (''' + @class_3id + ''' = '''' OR customer.class_3id in (select id from wc_list_to_tbl(''' + @class_3id + ''')) )\r\n\t--AND (''' + @class_4id + ''' = '''' OR customer.class_4id  in (select id from wc_list_to_tbl(''' + @class_4id + ''')) )\r\n\t--AND (''' + @class_5id + ''' = '''' OR customer.class_5id  in (select id from wc_list_to_tbl(''' + @class_5id + ''')) )\r\n\t--AND (' + CONVERT(VARCHAR, @supplier_id) + ' = 0 OR cast(wc_flat_invoice_line.supplier_id as varchar(max))  in (select id from wc_list_to_tbl(''' + @supplier_id + ''')))\r\n\t--AND (''' + @location_id + ''' = '''' OR cast(wc_flat_invoice_line.sales_location_id  as varchar(max)) in (select id from wc_list_to_tbl(''' + @location_id + ''')))\r\n\t--AND (''' + @product_group_id + ''' = '''' OR cast(wc_flat_invoice_line.product_group_id as varchar(max)) in (select id from wc_list_to_tbl(''' + @product_group_id + ''')))\r\n\t--AND (''' + @sales_manager_id + ''' = ''0'' OR wc_sales_manager_x_salesrep.sales_manager_id = ''' + @sales_manager_id + ''')\r\n\t--AND (''' + @locations + ''' = '''' OR cast(wc_flat_invoice_line.sales_location_id  as varchar(max)) in (select id from wc_list_to_tbl(''' + @locations + ''')))\r\n\t--AND (''' + @company_id + ''' = '''' OR wc_flat_invoice_line.company_no = ''' + @company_id + ''')\r\n\t--AND (''' + @branch_id + ''' = '''' OR wc_flat_invoice_line.branch_id  in (select id from wc_list_to_tbl(''' + @branch_id + ''')) ) \r\n\t--and (''' + @branches + ''' = '''' or wc_flat_invoice_line.branch_id  in (select id from wc_list_to_tbl(''' + @branches + ''')) )\r\n\t--AND (' + CONVERT(VARCHAR, @ship_to_id) + ' = 0 OR cast(wc_flat_invoice_line.ship_to_id  as varchar(max))  in (select id from wc_list_to_tbl(''' + @ship_to_id + ''')) )\r\n\t--AND (wc_flat_invoice_line.product_group_id BETWEEN ''' + @start_product_group_id + ''' AND ''' + @end_product_group_id + ''') \r\n\t--AND (''' + @other_charge_item + ''' = '''' or inv_mast.other_charge_item = ''' + @other_charge_item + ''') \r\n\t--AND (''' + @contact_id + ''' = '''' or wc_flat_invoice_line.contact_id  in (select id from wc_list_to_tbl(''' + @contact_id + ''')) )\r\n\t--AND (''' + @customer_territory_uids + ''' = '''' or wc_flat_invoice_line.customer_id in (select customer_id from territory_x_customer where territory_uid in (select id from wc_list_to_tbl(''' + @customer_territory_uids + '''))))\r\n\t--AND (''' + @ship_to_territory_uids + ''' = '''' or wc_flat_invoice_line.ship_to_id in (select ship_to_id from territory_x_ship_to where territory_uid in (select id from wc_list_to_tbl(''' + @ship_to_territory_uids + '''))))\r\n\r\n\r\n) AS P\r\n\r\nPIVOT( SUM(' + @VALUECOLUMNNAME + ') FOR MonthYear IN (' + @COLUMNS + ') ) AS PVT '\r\n\r\nEXEC (@SQL)\r\n--PRINT (@SQL)\r\n--select cast(@SQL as varchar(max)) as rtnSQLCol",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 55,
      gdc_DataExplorerDataID: 10062,
      gdc_DataExplorerDataName: "wcCreateExpense",
      gdc_DataExplorerDataQuery:
        "\r\nINSERT INTO [dbo].[wc_expense]\r\n           ([expense_report_name]\r\n           ,[expense_detail]\r\n           ,[create_date]\r\n           ,[created_by]\r\n           ,[last_modified_date]\r\n           ,[last_modified_by])\r\n     VALUES\r\n           (@reportName\r\n           ,''\r\n           ,getdate()\r\n           ,':currentUserName'\r\n           ,getdate()\r\n           ,':currentUserName')\r\n\r\nselect * from wc_expense\r\nwhere wc_expense_uid = SCOPE_IDENTITY() ",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 56,
      gdc_DataExplorerDataID: 10063,
      gdc_DataExplorerDataName: "wcUpdateExpense",
      gdc_DataExplorerDataQuery:
        "UPDATE [dbo].[wc_expense] SET [expense_report_name] = @reportName ,[expense_detail] = @reportDetail ,[last_modified_date] = getdate() ,[last_modified_by] = ':currentUserName', [expense_attachments] = @reportAttach where wc_expense_uid = @expenseID",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 57,
      gdc_DataExplorerDataID: 10064,
      gdc_DataExplorerDataName: "wcExepenseList",
      gdc_DataExplorerDataQuery:
        "select * from wc_expense\r\nwhere created_by = ':currentUserName' or ':currentRole' = 'Administrator'",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 58,
      gdc_DataExplorerDataID: 10068,
      gdc_DataExplorerDataName: "wcSalesAnalysisComponent",
      gdc_DataExplorerDataQuery:
        "select  sub.*, s.supplier_name, iv_item.item_id, iv_assembly.item_id as assembly, case when year_for_period = 2013 THEN 'CY' else 'PY' END as CurrentPrior  from wc_sales_history_report_view as sub\r\ninner join inv_mast iv_item with(nolock) on sub.inv_mast_uid = iv_item.inv_mast_uid\r\nleft join inv_mast iv_assembly with(nolock) on sub.assembly_inv_mast_uid = iv_assembly.inv_mast_uid\r\ninner join supplier s with(nolock) on sub.supplier_id = s.supplier_id",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 59,
      gdc_DataExplorerDataID: 10069,
      gdc_DataExplorerDataName: "selectionData",
      gdc_DataExplorerDataQuery:
        "IF @filterType = 'activityUD'\r\nBEGIN\r\nINSERT INTO activity_trans_ud(activity_trans_no,[status])\r\nVALUES(@activitytransno,@activitystatus)\r\nEND\r\n\r\nIF @filterType = 'leadSuppliers'\r\nBEGIN\r\n\r\nselect optionDesc, optionValue from (\r\nSELECT '80/20' as optionDesc, 100269 as optionValue union all \r\nSELECT 'Atos' as optionDesc, 100305 as optionValue union all \r\nSELECT 'Bucher' as optionDesc, 100903 as optionValue union all \r\nSELECT 'Coval' as optionDesc, 119690 as optionValue union all \r\nSELECT 'Denso' as optionDesc, 100399 as optionValue union all \r\nSELECT 'Gems' as optionDesc, 100310 as optionValue union all \r\nSELECT 'Hawe' as optionDesc, 100313 as optionValue union all \r\nSELECT 'IAI' as optionDesc, 100320 as optionValue union all \r\nSELECT 'Kollmorgen' as optionDesc, 100290 as optionValue union all \r\nSELECT 'Legris' as optionDesc, 112593 as optionValue union all \r\nSELECT 'Lenze (MO/IL)' as optionDesc, 118797 as optionValue union all \r\nSELECT 'Lenze (AZ/NM)' as optionDesc, 119449 as optionValue union all \r\nSELECT 'Lenze (KS/AR/OK)' as optionDesc, 119448 as optionValue union all \r\nSELECT 'Micromatic' as optionDesc, 100336 as optionValue union all \r\nSELECT 'Miller' as optionDesc, 100355 as optionValue union all \r\nSELECT 'Murr' as optionDesc, 120929 as optionValue union all \r\nSELECT 'Numatics' as optionDesc, 100346 as optionValue union all \r\nSELECT 'Oriental Motor' as optionDesc, 100351 as optionValue union all \r\nSELECT 'Peter Paul' as optionDesc, 100360 as optionValue union all \r\nSELECT 'Proface' as optionDesc, 100366 as optionValue union all \r\nSELECT 'PULS' as optionDesc, 112532 as optionValue union all \r\nSELECT 'Schmersal' as optionDesc, 100370 as optionValue union all \r\nSELECT 'Schunk' as optionDesc, 100371 as optionValue union all \r\nSELECT 'Secomea' as optionDesc, 117454 as optionValue union all \r\nSELECT 'Sick (AR/OK)' as optionDesc, 110979 as optionValue union all \r\nSELECT 'Sick (AZ)' as optionDesc, 116863 as optionValue union all \r\nSELECT 'Sick (KC)' as optionDesc, 110978 as optionValue union all \r\nSELECT 'Sick (NM)' as optionDesc, 116864 as optionValue union all \r\nSELECT 'Sick (STL)' as optionDesc, 100375 as optionValue union all \r\nSELECT 'Sick (TX)' as optionDesc, 126021 as optionValue union all \r\nSELECT 'Swivellink' as optionDesc, 111281 as optionValue union all \r\nSELECT 'Thomson' as optionDesc, 100381 as optionValue union all \r\nSELECT 'Tolomatic' as optionDesc, 116882 as optionValue union all \r\nSELECT 'Turck' as optionDesc, 100384 as optionValue union all \r\nSELECT 'Versa' as optionDesc, 100385 as optionValue union all \r\nSELECT 'Weidmuller' as optionDesc, 100388 as optionValue union all \r\nSELECT 'West TC' as optionDesc, 118637 as optionValue union all \r\nSELECT 'Wilkerson' as optionDesc, 100358 as optionValue union all \r\nSELECT 'Yaskawa Motion' as optionDesc, 120513 as optionValue union all \r\nSELECT 'Yaskawa Motoman' as optionDesc, 111751 as optionValue ) as a\r\n\r\nEND\r\n\r\nIF @filterType = 'neffStatus'\r\nBEGIN\r\nselect [id] as optionValue, [status_desc] as optionDesc from wc_neff_lead_status\r\norder by sort asc\r\nEND\r\n\r\nIF @filterType = 'activityType'\r\nBEGIN\r\nselect activity_id as optionValue, activity_desc as optionDesc from activity\r\nwhere delete_flag = 'N'\r\nEND\r\n\r\nIF @filterType = 'prophetUser'\r\nBEGIN\r\nselect id as optionValue, [name] as optionDesc from users\r\nwhere delete_flag = 'N'\r\nand active = 'N'\r\nEND\r\n\r\n\r\nIF @filterType = 'salesrep'\r\nBEGIN\r\nselect id as optionValue, first_name + ' ' + last_name as optionDesc from contacts\r\nwhere salesrep = 'Y'\r\norder by optionDesc asc\r\nEND\r\n\r\nIF @filterType = 'customer'\r\nBEGIN\r\nselect distinct top 10 customer_id as optionValue, customer_name as optionDesc, company_id from customer\r\nwhere delete_flag = 'N' \r\nand company_id in (select default_company from users where id = ':currentp21ID')\r\nand (customer_name like '%'+@customerSearch+'%' or @customerSearch = '')\r\norder by customer_name asc\r\nEND\r\n\r\nIF @filterType = 'branch'\r\nBEGIN\r\nselect distinct branch_id as optionValue, branch_description as optionDesc from branch\r\nwhere delete_flag = 'N'  \r\nand company_id in (select default_company from users where id = ':currentp21ID')\r\norder by branch_description asc \r\nEND\r\nIF @filterType = 'class'\r\nBEGIN\r\nselect \tclass_id as optionValue,\tclass_description as optionDesc from class\r\nwhere delete_flag = 'N'\r\nand class_type = @class\r\nand class_number = @classno\r\nEND\r\nIF @filterType = 'company'\r\nBEGIN\r\nselect \tcompany_id as optionValue,\tcompany_name as optionDesc from company\r\nwhere delete_flag = 'N' \r\nEND\r\n\r\nIF @filterType = 'territory'\r\nBEGIN\r\nselect territory_id as optionValue, territory_desc as optionDesc from territory\r\nEND\r\n\r\nIF @filterType = 'customerContact'\r\nBEGIN\r\nselect distinct id  as optionValue, first_name + ' ' + last_name   as optionDesc , customer_id from (select c1.id, c1.first_name, c1.last_name, st.customer_id \r\n                                 from dbo.contacts_x_ship_to cst with(nolock) \r\n                                 inner join dbo.contacts c1 with(nolock) on cst.contact_id = c1.id \r\n                                 inner join dbo.ship_to st with(nolock) on cst.ship_to_id = st.ship_to_id \r\n                                 left join dbo.ship_to_salesrep sr with(nolock) on (st.ship_to_id = sr.ship_to_id and sr.delete_flag = 'N') \r\n                                 left join dbo.contact_role with(nolock) on c1.contact_role_uid = contact_role.contact_role_uid \r\n                                 where  (c1.delete_flag <> 'Y') \r\n                                 and (st.delete_flag <> 'Y')  \r\n                                 and (cst.row_status_flag = 704)  \r\n                                 UNION \r\n                                 select  c2.id, c2.first_name, c2.last_name, cc.customer_id \r\n                                 from dbo.oe_contacts_customer cc with(nolock) \r\n                                 inner join dbo.contacts c2 with(nolock) on cc.contact_id = c2.id \r\n                                 left join dbo.contact_role with(nolock) on c2.contact_role_uid = contact_role.contact_role_uid\r\n                                 where  (cc.delete_flag <> 'Y') \r\n                                 and (c2.delete_flag <> 'Y')  ) as a\r\n\t\t\t\t\t\t\t\t where customer_id = @customer_id\r\norder by optionDesc asc\r\nEND",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 60,
      gdc_DataExplorerDataID: 10070,
      gdc_DataExplorerDataName: "designCreateProject",
      gdc_DataExplorerDataQuery:
        "\r\nINSERT INTO [dbo].[wc_neff_design_project]\r\n           ([project_name]\r\n           ,[project_data]\r\n,[customer_id]\r\n,[contact_id]\r\n           ,[created_date]\r\n           ,[created_by]\r\n           ,[last_modified_date]\r\n           ,[last_modified_by]\r\n,[delete_flag])\r\n     VALUES\r\n           (@projectName\r\n           ,@projectDef\r\n           ,@customer\r\n           ,@contact\r\n           ,getdate()\r\n           ,':currentp21ID'\r\n              ,getdate()\r\n             ,':currentp21ID', 'N')\r\n\r\nSELECT wc_neff_design_project.*, customer.customer_name, contacts.first_name + ' ' + contacts.last_name as contact_name from wc_neff_design_project\r\nleft join customer with(nolock)\r\non customer.customer_id = wc_neff_design_project.customer_id\r\nleft join contacts with(nolock)\r\non contacts.id = wc_neff_design_project.contact_id\r\nwhere project_id = @@IDENTITY",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 61,
      gdc_DataExplorerDataID: 10071,
      gdc_DataExplorerDataName: "designUpdateProject",
      gdc_DataExplorerDataQuery:
        "UPDATE [dbo].[wc_neff_design_project]\r\n   SET [project_name] = @projectName\r\n      ,[project_data] = @projectDef \r\n      ,[customer_id]=@customerID\r\n      ,[contact_id]=@contactID\r\n      ,[last_modified_date] = getdate()\r\n      ,[last_modified_by] = ':currentp21ID'\r\nwhere project_id = @projectID\r\n\r\nSELECT wc_neff_design_project.*, customer.customer_name, contacts.first_name + ' ' + contacts.last_name as contact_name from wc_neff_design_project\r\nleft join customer with(nolock)\r\non customer.customer_id = wc_neff_design_project.customer_id\r\nleft join contacts with(nolock)\r\non contacts.id = wc_neff_design_project.contact_id\r\nwhere project_id = @projectID",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 62,
      gdc_DataExplorerDataID: 10072,
      gdc_DataExplorerDataName: "designListProject",
      gdc_DataExplorerDataQuery:
        "select wc_neff_design_project.*, customer.customer_name, contacts.first_name + ' ' + contacts.last_name as contact_name, st.first_name + ' ' + st.last_name as sales_rep from wc_neff_design_project\r\nleft join customer with(nolock)\r\non customer.customer_id = wc_neff_design_project.customer_id\r\nleft join contacts with(nolock)\r\non contacts.id = wc_neff_design_project.contact_id\r\nleft join contacts as st with(nolock)\r\non st.id = customer.salesrep_id",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 63,
      gdc_DataExplorerDataID: 10073,
      gdc_DataExplorerDataName: "shipToSearch",
      gdc_DataExplorerDataQuery:
        "select top 20 ship_to_id,a.name,phys_address1,phys_address2,phys_city,phys_state,central_phone_number from ship_to as st with(nolock)\r\njoin address as a with(nolock)\r\non st.ship_to_id = a.id\r\nwhere a.name like '%@shipsearch%'\r\n",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 64,
      gdc_DataExplorerDataID: 10074,
      gdc_DataExplorerDataName: "BinData",
      gdc_DataExplorerDataQuery:
        "SELECT job_price_bin.job_price_line_uid,job_price_bin.customer_id,\r\njob_price_bin.ship_to_id,\r\ncustomer.customer_name,\r\naddress.name,\r\ninv_mast.item_desc, \r\n              inv_mast.extended_desc, \r\ncustomer_part_no,\r\n              job_price_line.price,  \r\njob_price_bin.min_qty, \r\njob_price_bin.max_qty, \r\njob_price_bin.reorder_qty\r\n\r\nFROM   job_price_bin \r\n       JOIN job_price_line WITH(nolock) \r\n         ON job_price_line.job_price_line_uid = job_price_bin.job_price_line_uid \r\n       JOIN inv_mast WITH(nolock) \r\n         ON inv_mast.inv_mast_uid = job_price_line.inv_mast_uid \r\njoin customer with(nolock)\r\non customer.customer_id = job_price_bin.customer_id \r\njoin address with(nolock)\r\non address.id = job_price_bin.ship_to_id\r\nwhere job_price_bin.row_status_flag = 704",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 65,
      gdc_DataExplorerDataID: 10075,
      gdc_DataExplorerDataName: "timeLineData",
      gdc_DataExplorerDataQuery:
        "select 'Quote - $5,000' as title, '50 lines, expires march 27th....' as description, dateadd(day,-4,getdate()) as activityDate, 'quote' as activityType, 'SIS' as company_id, 1234 as customer_id\r\nunion all\r\nselect 'Quote - $5,000' as title, '50 lines, expires march 27th....' as description, dateadd(day,-4,getdate()) as activityDate, 'quote' as activityType, 'SIS' as company_id, 1234 as customer_id\r\nunion all\r\nselect 'Opportunity - $1,000' as title, 'New production in the foothills, want new tile and additional services...' as description, dateadd(day,-8,getdate()) as activityDate, 'opportunity' as activityType, 'SIS' as company_id, 1234 as customer_id\r\nunion all\r\nselect 'Task' as title, 'Follow up email..' as description, dateadd(day,-8,getdate()) as activityDate, 'task' as activityType, 'SIS' as company_id, 1234 as customer_id\r\nunion all\r\nselect 'Sales Call' as title, 'Talked about new lines they are bring up next year' as description, dateadd(day,-2,getdate()) as activityDate, 'salesCall' as activityType, 'SIS' as company_id, 1234 as customer_id\r\nunion all\r\nselect 'Note' as title, 'All orders should be shipped next day delivery' as description, dateadd(day,-2,getdate()) as activityDate, 'notes' as activityType, 'SIS' as company_id, 1234 as customer_id\r\nunion all\r\nselect 'Quote - $5,000' as title, '50 lines, expires march 27th....' as description, dateadd(day,-4,getdate()) as activityDate, 'quote' as activityType, 'BF' as company_id, 56789 as customer_id\r\nunion all\r\nselect 'Opportunity - $1,000' as title, 'New production in the foothills, want new tile and additional services...' as description, dateadd(day,-8,getdate()) as activityDate, 'opportunity' as activityType, 'BF' as company_id, 56789 as customer_id\r\nunion all\r\nselect 'Task' as title, 'Follow up email..' as description, dateadd(day,-8,getdate()) as activityDate, 'task' as activityType, 'BF' as company_id, 56789 as customer_id\r\nunion all\r\nselect 'Sales Call' as title, 'Talked about new lines they are bring up next year' as description, dateadd(day,-2,getdate()) as activityDate, 'salesCall' as activityType, 'BF' as company_id, 56789 as customer_id\r\nunion all\r\nselect 'Note' as title, 'All orders should be shipped next day delivery' as description, dateadd(day,-2,getdate()) as activityDate, 'notes' as activityType, 'BF' as company_id, 56789 as customer_id",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 66,
      gdc_DataExplorerDataID: 10076,
      gdc_DataExplorerDataName: "callLogData",
      gdc_DataExplorerDataQuery:
        " \r\n\tselect  activity_trans.activity_trans_no \r\n\t, activity_trans.activity_id \r\n\t, activity.activity_desc \r\n\t, activity_trans.hard_touch_flag \r\n\t, activity_trans.contact_id \r\n\t, activity_trans.entry_date \r\n\t, upper(activity_trans.assigned_by_id) assigned_by_id\r\n\t, upper(activity_trans.assigned_to_id) assigned_to_id\r\n\t, activity_trans.completed_date \r\n\t, activity_trans.completed_flag \r\n\t, upper(activity_trans.completed_by_id) completed_by_id\r\n\t, activity_trans.comments \r\n\t, activity_trans.date_created \r\n\t, activity_trans.date_last_modified \r\n\t, activity_trans.last_maintained_by \r\n\t, activity_trans.target_complete_date \r\n\t, activity_trans.followup \r\n\t, activity_trans.followup_comment_cd \r\n\t, activity_trans.subject \r\n\t, activity_trans.company_id \r\n\t, activity_trans.link_id as customer_id \r\n\t, activity_trans.problem_code_uid \r\n\t, customer.customer_name \r\n\t, address.central_phone_number as customer_central_phone_number\r\n\t, address.phys_address1 as customer_phys_address1\r\n\t, address.phys_address2 as customer_phys_address2\r\n\t, '' as customer_phys_address3\r\n\t, address.phys_city as customer_city\r\n\t, address.phys_state as customer_state\r\n\t, address.phys_postal_code as customer_phys_postal_code\r\n\t, customer.customer_type_cd as current_customer_type_cd\r\n\t, activity_trans.link_type_cd as original_customer_type_cd\r\n\t, contacts.first_name as contact_first_name\r\n\t, contacts.last_name as contact_last_name \r\n\t, contacts.title as contact_title\r\n\t, contacts.direct_phone as contact_direct_phone\r\n\t, contacts.phone_ext as contact_phone_ext\r\n\t, contacts.cellular as contact_cellular \r\n\t, contacts.address_name as contact_address_name\r\n\t, contacts.email_address as contact_email_address\r\n\t, contacts.email_address2 as contact_email_address2\r\n\t, reps.first_name as salesrep_first_name\r\n\t, reps.last_name as salesrep_last_name\r\n\t, reps.id as salesrep_id\r\n\t, opportunity.opportunity_id \r\n\t, opportunity.opportunity_uid\r\n\t, opportunity.opportunity_name \r\n\t, opportunity.next_step_date opportunity_next_step_date\r\n\t, opportunity.anticipated_close_date opportunity_anticipated_close_date\r\n\t, opportunity.opportunity_size \r\n\t, opportunity.success_probability \r\n\t, pg.call_total_price as call_total_price_product_group\r\n\t, sp.call_total_supplier_price as call_total_price_supplier\r\n\t, wc_call_log_location.ship_to_id \r\n\t, wc_call_log_location.address_name \r\n\t, wc_call_log_location.address_1 \r\n\t, wc_call_log_location.address_2\r\n\t, wc_call_log_location.city \r\n\t, wc_call_log_location.state \r\n\t, wc_call_log_location.postal_code \r\n\t, wc_call_log_location.phone_no \r\n\t, wc_call_log_location.location_notes\r\n\t, wc_activity_trans_hierarchy.parent_activity_trans_no \r\n\t, trans_code.code_description as trans_description \r\n\t, activity_trans.transaction_type_cd  \r\n\t, activity_trans.transaction_no \r\n\t, wc_activity_trans_ext.mileage \r\n\t, wc_activity_trans_ext.row_status_flag\r\n\r\n\tfrom dbo.activity_trans with(nolock) \r\n\tinner join dbo.customer with(nolock) on (dbo.activity_trans.link_id = dbo.customer.customer_id and dbo.activity_trans.link_type_cd in (1203, 1204) and dbo.activity_trans.company_id = dbo.customer.company_id)\r\n\tinner join dbo.address with(nolock) on dbo.customer.customer_id = dbo.address.id \r\n\tleft join dbo.contacts with(nolock) on dbo.activity_trans.contact_id = dbo.contacts.id \r\n\tleft join dbo.contacts reps with(nolock) on (lower(dbo.activity_trans.assigned_to_id) = lower(reps.login_id) and coalesce(reps.delete_flag, 'N') = 'N' and reps.salesrep = 'Y' and (@salesrep_id <> '0' or @sales_manager_id <> '0'))\r\n\tleft join dbo.wc_sales_manager_x_salesrep with(nolock) on (reps.id = dbo.wc_sales_manager_x_salesrep.salesrep_id and @sales_manager_id <> '0') \r\n\tinner join dbo.activity with(nolock) on dbo.activity_trans.activity_id = dbo.activity.activity_id \r\n\tinner join dbo.wc_call_log_activities with(nolock) on dbo.activity_trans.activity_id = dbo.wc_call_log_activities.activity_id\r\n\tleft join dbo.opportunity with(nolock) on dbo.activity_trans.transaction_no = dbo.opportunity.opportunity_id and coalesce(dbo.activity_trans.transaction_type_cd, 2714) = 2714\r\n\tleft join (select dbo.wc_call_log_product_group.activity_trans_no, SUM(wc_call_log_product_group.total_price) as call_total_price from dbo.wc_call_log_product_group with(nolock) where (@product_group_uid = '' or product_group_uid in (select id from wc_list_to_tbl(@product_group_uid))) group by dbo.wc_call_log_product_group.activity_trans_no) pg  on dbo.activity_trans.activity_trans_no = pg.activity_trans_no  \r\n\tleft join (select dbo.wc_call_log_supplier.activity_trans_no, SUM(wc_call_log_supplier.total_price) as call_total_supplier_price from dbo.wc_call_log_supplier with(nolock) where (@supplier_id = '' or supplier_id in (select id from wc_list_to_tbl(@supplier_id))) group by dbo.wc_call_log_supplier.activity_trans_no) sp  on dbo.activity_trans.activity_trans_no = sp.activity_trans_no \r\n\tleft join dbo.wc_call_log_location with(nolock) on (dbo.activity_trans.activity_trans_no = dbo.wc_call_log_location.activity_trans_no) \r\n\tleft join gdc_WebConfig_UserValue on (activity_trans.activity_id = gdc_WebConfig_UserValue.WConf_UserValue_Value and gdc_WebConfig_UserValue.WConf_AttributeID = 'delete_status_activity_type_id')\r\n\tleft join dbo.wc_activity_trans_hierarchy with(nolock) on dbo.activity_trans.activity_trans_no = dbo.wc_activity_trans_hierarchy.activity_trans_no \r\n\tleft join dbo.code_p21 trans_code with(nolock) on dbo.activity_trans.transaction_type_cd = trans_code.code_no \r\n\tleft join dbo.wc_activity_trans_ext with(nolock) on dbo.activity_trans.activity_trans_no = dbo.wc_activity_trans_ext.activity_trans_no\r\n\r\n\twhere (@activity_id = '' or activity_trans.activity_id in (select id from wc_list_to_tbl(@activity_id)))\r\n\tand (lower(@assigned_to_id) = '' or lower(activity_trans.assigned_to_id) in (select id from wc_list_to_tbl(lower(@assigned_to_id))))\r\n\tand ((@completed_flag = 'Y' and activity_trans.completed_date between @start_completed_date and @end_completed_date)\r\n\t\tor (@completed_flag in ('N', 'B') and activity_trans.target_complete_date between @start_completed_date and @end_completed_date))\r\n\tand (@customer_id = 0 or customer.customer_id = @customer_id) \r\n\tand (@completed_flag = 'B' or activity_trans.completed_flag = @completed_flag)\r\n\tand (@salesrep_id = '0' or reps.id in (select id from wc_list_to_tbl(@salesrep_id))) \r\n\tand (@sales_manager_id = '0' or wc_sales_manager_x_salesrep.sales_manager_id = @sales_manager_id)\r\n\tand (@territory_uid = '' or customer.customer_id in (SELECT customer_id FROM territory_x_customer with(nolock) WHERE territory_uid in (select id from wc_list_to_tbl(@territory_uid))))\r\n\tand (@activity_trans_no = '' or activity_trans.activity_trans_no = @activity_trans_no) \r\n\tand (@product_group_uid = '' or activity_trans.activity_trans_no in (select activity_trans_no from wc_call_log_product_group with(nolock) where wc_call_log_product_group.product_group_uid in (select id from wc_list_to_tbl(@product_group_uid)))) \r\n\tand (@supplier_id = '' or activity_trans.activity_trans_no in (select activity_trans_no from wc_call_log_supplier with(nolock) where wc_call_log_supplier.supplier_id in (select id from wc_list_to_tbl(@supplier_id))))\r\n\tand (@ship_to_id = 0 or coalesce(wc_call_log_location.ship_to_id, 0) = @ship_to_id) \r\n\tand (@company_id = '' or activity_trans.company_id = @company_id) \r\n\tand (@customer_city = '' or coalesce(address.phys_city, '') in (select id from wc_list_to_tbl(@customer_city)))\r\n\tand (@customer_state = '' or coalesce(address.phys_state, '') in (select id from wc_list_to_tbl(@customer_state)))\r\n\tand (@location_city = '' or coalesce(wc_call_log_location.city, '') in (select id from wc_list_to_tbl(@location_city)))\r\n\tand (@location_state = '' or coalesce(wc_call_log_location.state, '') in (select id from wc_list_to_tbl(@location_state)))\r\n\tand (@search_text = '' or coalesce(activity_trans.subject, '') + ' ' + coalesce(convert(varchar(max), activity_trans.comments), '') + ' ' + coalesce(customer.customer_name, '') + ' ' + activity_trans.activity_trans_no like '%' + @search_text + '%')\r\n\t--and gdc_WebConfig_UserValue.WConf_UserValue_Value is null\r\n\tand (@row_status_flag = '' or coalesce(wc_activity_trans_ext.row_status_flag, 704) in (select id from wc_list_to_tbl(@row_status_flag)))",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: true,
      gdc_report_center_source: null
    },
    {
      number: 67,
      gdc_DataExplorerDataID: 10077,
      gdc_DataExplorerDataName: "timeTrackData",
      gdc_DataExplorerDataQuery:
        "select * from wc_time_track\r\nwhere user_id = ':currentp21ID'",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 68,
      gdc_DataExplorerDataID: 10078,
      gdc_DataExplorerDataName: "timeTrackUpdateCreate",
      gdc_DataExplorerDataQuery:
        "IF @time_track_id = 0\r\nBEGIN\r\nINSERT INTO wc_time_track(user_id, activity_type,activity_id, clockin_time, date_created, date_last_modified, created_by, last_modified_by)\r\nVALUES(':currentp21ID',@activity_type, @activity_id, getdate(), getdate(),getdate(),':currentp21ID',':currentp21ID')\r\n\r\nSELECT *, case when time_track_id = @@IDENTITY THEN 1 ELSE 0 END as newTrackID FROM wc_time_track\r\nwhere activity_id = @activity_id\r\n\r\nEND\r\nELSE\r\nBEGIN\r\n\r\nupdate wc_time_track\r\nset clockout_time = getdate(),\r\ndate_last_modified = getdate(),\r\nlast_modified_by = ':currentp21ID'\r\nwhere time_track_id = @time_track_id\r\n\r\nSELECT *, 0 as newTrackID FROM wc_time_track\r\nwhere activity_id = @activity_id\r\n\r\nEND",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 69,
      gdc_DataExplorerDataID: 10079,
      gdc_DataExplorerDataName: "mileageReport",
      gdc_DataExplorerDataQuery:
        "SELECT assinged_user.NAME, \r\n                  cust.customer_id, \r\n                  cust.customer_name, \r\n                  p21_act.completed_by_id, \r\n                  p21_act.assigned_to_id, \r\n                  p21_Act.entry_date, \r\n                  p21_act.completed_date, \r\n                  ct.id                              AS contact_id, \r\n                  ct.first_name + ' ' + ct.last_name AS contact_name, \r\n                  p21_act.subject, \r\n                  mileage.mileage \r\nFROM   activity_trans p21_act with(nolock)\r\n       LEFT OUTER JOIN wc_activity_trans_ext mileage \r\n                    ON p21_act.activity_trans_no = mileage.activity_trans_no \r\n       LEFT OUTER JOIN contacts ct  with(nolock)\r\n                    ON ct.id = p21_act.contact_id \r\n       LEFT OUTER JOIN customer cust  with(nolock)\r\n                    ON cust.customer_id = ct.address_id \r\n       JOIN users assinged_user  with(nolock)\r\n         ON assinged_user.id = p21_act.assigned_to_id \r\nWHERE  entry_date >= '1/1/2019' \r\n       AND ( p21_act.completed_flag = 'Y' ) ",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 70,
      gdc_DataExplorerDataID: 10080,
      gdc_DataExplorerDataName: "wcnFilterCustomer",
      gdc_DataExplorerDataQuery:
        "  SELECT DISTINCT Cast(customer_id AS VARCHAR(max)) AS filterValue,\r\n    customer_name                     AS filterDesc,\r\n    phys_address1,\r\n    phys_address2,\r\n    phys_address3,\r\n    phys_city,\r\n    phys_state,\r\n    phys_postal_code,\r\n    central_phone_number,\r\n    customer_type_cd\r\n  FROM customer WITH(nolock)\r\n    INNER JOIN address\r\n    ON address.id = customer.customer_id\r\n  WHERE  customer.delete_flag = 'N' \r\nAND customer_name like '%'+@search+'%';",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 71,
      gdc_DataExplorerDataID: 10081,
      gdc_DataExplorerDataName: "wcnFilterShipTo",
      gdc_DataExplorerDataQuery:
        "SELECT DISTINCT Cast(ship_to_id AS VARCHAR(max)) AS filterValue,\r\n    a.NAME                           AS filterDesc,\r\na.NAME,\r\nship_to_id,\r\n    c.customer_id,\r\n    phys_address1,\r\n    phys_address2,\r\n    phys_address3,\r\n    phys_city,\r\n    phys_state,\r\n    phys_postal_code,\r\n    customer_name,\r\n    central_phone_number,\r\n    customer_type_cd,\r\n(SELECT\r\n  count(distinct ship_to_id)\r\nFROM\r\n  ship_to\r\nWHERE delete_flag = 'N' and customer_id=c.customer_id)\r\nAS ship_to_count,\r\n(SELECT\r\n  COUNT( DISTINCT contact_id)\r\nFROM\r\n  oe_contacts_customer\r\nWHERE customer_id = c.customer_id and delete_flag= 'N')\r\nAS contact_count\r\n  FROM ship_to WITH(nolock)\r\n  LEFT  JOIN address a\r\n    ON a.id = ship_to_id\r\n   LEFT JOIN customer c \r\n    ON c.customer_id = ship_to.customer_id\r\n  WHERE  a.delete_flag = 'N'\r\n    AND ship_to.delete_flag = 'N'\r\nAND a.NAME like '%'+@search+'%'\r\nand ((@customer_id = 0) or (c.customer_id = @customer_id))",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 72,
      gdc_DataExplorerDataID: 10082,
      gdc_DataExplorerDataName: "wcnFilterContact",
      gdc_DataExplorerDataQuery:
        "SELECT DISTINCT  Cast(id AS VARCHAR(max))     AS filterValue,\r\n  first_name + ' ' + last_name AS filterDesc,\r\n  title,\r\n  address_name\r\nFROM  contacts c\r\n left join oe_contacts_customer o\r\n  on o.contact_id = c.id\r\nleft join contacts_x_ship_to s\r\non s.contact_id = c.id\r\nWHERE  \r\nc.delete_flag = 'N' AND \r\nfirst_name+last_name like '%'+@search+'%'\r\nAND (@customer_id = 0 OR o.customer_id = @customer_id)\r\nAND (@address_id = 0 OR c.address_id = @address_id)\r\nAND (@ship_to_id = 0 OR s.ship_to_id = @ship_to_id)\r\nORDER BY filterDesc;",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 73,
      gdc_DataExplorerDataID: 10083,
      gdc_DataExplorerDataName: "wcnFilterOpportunity",
      gdc_DataExplorerDataQuery:
        "SELECT DISTINCT Cast(opportunity_id AS VARCHAR(max)) AS filterValue,\r\n  opportunity_name AS filterDesc,\r\nopportunity_name,\r\n  cus.customer_name,\r\n  c.first_name + ' ' + c.last_name as salesrep,\r\n  assigned_to_id,\r\n  opportunity_size,\r\n  success_probability,\r\n  next_step_date,\r\n  opportunity_type_desc AS type,\r\n  opportunity_status_desc AS status,\r\n  opportunity_stage_desc AS stage,\r\n  opportunity_step_desc AS step\r\n\r\nFROM opportunity o\r\njoin opportunity_step os \r\nON os.opportunity_step_uid = o.opportunity_step_uid\r\njoin opportunity_stage ost \r\nON ost.opportunity_stage_uid = o.opportunity_stage_uid\r\nJOIN opportunity_status ostat\r\nON ostat.opportunity_status_uid = o.opportunity_status_uid\r\nJOIN opportunity_type ot \r\nON ot.opportunity_type_uid = o.opportunity_type_uid\r\nJOIN contacts c \r\nON c.id = o.salesrep_id\r\nJOIN customer cus \r\nON cus.customer_id = o.customer_id\r\nWHERE opportunity_name like '%'+@search+'%';\r\n",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 74,
      gdc_DataExplorerDataID: 10084,
      gdc_DataExplorerDataName: "wcnFilterTask",
      gdc_DataExplorerDataQuery:
        "SELECT DISTINCT Cast(activity_trans_no AS VARCHAR(max)) AS filterValue,\r\n  subject,\r\ncompleted_date,\r\ncompleted_by_id,\r\n  c.customer_name,\r\n  transaction_no,\r\n  opportunity_name,\r\n  act.activity_desc,\r\n  c.customer_name AS filterDesc,\r\n  target_complete_date,\r\n  a.assigned_to_id,\r\n  a.assigned_by_id\r\nFROM activity_trans a\r\njoin customer c\r\non a.link_id = c.customer_id\r\njoin activity act \r\non a.activity_id = act.activity_id\r\njoin opportunity o\r\non o.opportunity_id = a.transaction_no\r\nwhere a.activity_id like @activityId\r\nand completed_flag like @completedFlag\r\nand c.customer_name like '%' + @search + '%'\r\nORDER BY target_complete_date DESC;  ",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: true,
      gdc_report_center_source: null
    },
    {
      number: 75,
      gdc_DataExplorerDataID: 10085,
      gdc_DataExplorerDataName: "wcnCustomer",
      gdc_DataExplorerDataQuery:
        "SELECT DISTINCT Cast(customer_id AS VARCHAR(max)) AS id,\r\n  customer_name AS name,\r\n  phys_address1 AS address1,\r\n  phys_address2 AS address2,\r\n  phys_address3 AS address3,\r\n  phys_city AS city,\r\n  phys_state AS state,\r\n  phys_postal_code AS zip,\r\n  central_phone_number AS phone,\r\n  customer_type_cd AS type,\r\n(select count(*) as noteCount\r\nfrom customer_notepad\r\nwhere customer_id = @search and delete_flag = 'N')\r\nas noteCount,\r\n(SELECT\r\n  count( distinct contact_id)\r\nFROM\r\n  oe_contacts_customer\r\nwhere customer_id = @search and delete_flag= 'N')\r\nas contactCount,\r\n(SELECT\r\n  count(distinct ship_to_id)\r\nFROM\r\n  ship_to\r\nWHERE delete_flag = 'N' and customer_id=@search)\r\nAS shipToCount\r\n  FROM customer c\r\nWITH\r\n(nolock)\r\n    JOIN address\r\n    ON address.id = c.customer_id\r\n  WHERE  c.delete_flag = 'N' \r\nAND c.customer_id = @search;\r\n",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 76,
      gdc_DataExplorerDataID: 10086,
      gdc_DataExplorerDataName: "wcnContacts",
      gdc_DataExplorerDataQuery:
        "SELECT DISTINCT  Cast(c.id AS VARCHAR(max))     AS filterValue,\r\n  first_name + ' ' + last_name AS filterDesc,\r\n  title,\r\n  address_name,\r\n  cellular,\r\n  direct_phone,\r\n  central_phone_number,\r\n  c.email_address,\r\n  phys_address1,\r\n  phys_address2,\r\n  phys_city,\r\n  phys_state,\r\n  phys_postal_code\r\nFROM  contacts c\r\nLEFT JOIN address a\r\nON c.address_id = a.id\r\nWHERE  \r\nc.delete_flag = 'N' AND \r\nc.id = @search;",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 77,
      gdc_DataExplorerDataID: 10098,
      gdc_DataExplorerDataName: "wcSalesAnalysis",
      gdc_DataExplorerDataQuery:
        "SELECT distinct \r\n           CASE \r\n                      WHEN  Cast(Cast(period AS VARCHAR(2)) + '/1/' + Cast(year_for_period AS VARCHAR(4)) AS DATE) BETWEEN Dateadd (year, -2, cast(':CurrentDate' as date)) AND        Dateadd(year, -1, cast(':CurrentDate' as date)) THEN 'Prior 12 Months'\r\n                      ELSE \r\n                                 CASE \r\n                                            WHEN cast(cast(period AS varchar(2)) + '/1/' + cast(year_for_period AS varchar(4)) AS date) > dateadd(year, -1, cast(':CurrentDate' as date)) THEN 'Current 12 Months'\r\n                                            ELSE 'other' \r\n                                 END \r\n           END AS CurrentPrior, \r\n           datename( month, dateadd( month, period, 0 ) - 1 ) + ', \r\n           ' + cast(year_for_period AS varchar(5)) AS monthnameyear, \r\n           datename( month, dateadd( month, period, 0 ) - 1 ) + ', \r\n           ' + cast(year_for_period AS varchar(5)) AS INV_YR_PD,\r\n           year_for_period as INVOICE_YEAR,\r\n           wc_flat_invoice_line.*, \r\n           customer.customer_name, \r\n           branch.branch_description, \r\n           product_group.product_group_desc, \r\n           supplier.supplier_name, \r\n           company.company_name, \r\n           location.location_name, \r\nlocation.location_id ,\r\n           address.NAME AS shiptoname, \r\n           inv_mast.item_id, \r\n           contacts.first_name                      + ' ' + contacts.last_name   AS salesrepname,\r\n           contacts.first_name                      + ' ' + contacts.last_name   AS salesman_name_current,\r\n           contacts_2.first_name                    + ' ' + contacts_2.last_name AS customercontactname,\r\n           wc_flat_invoice_line.extended_price_home - cogs_amount                  AS profitdollarscogs,\r\n           wc_flat_invoice_line.extended_price_home - commission_cost              AS profitdollarscommission,\r\n           wc_flat_invoice_line.extended_price_home - other_cost                   AS profitdollarsothercost,\r\n           CASE wc_flat_invoice_line.extended_price_home \r\n                      WHEN 0 THEN 0 \r\n                      ELSE ( wc_flat_invoice_line.extended_price_home - ( cogs_amount ) ) / wc_flat_invoice_line.extended_price_home * .01\r\n           END AS profitpercentcogs, \r\n           CASE wc_flat_invoice_line.extended_price_home \r\n                      WHEN 0 THEN 0 \r\n                      ELSE ( wc_flat_invoice_line.extended_price_home - ( commission_cost ) ) / wc_flat_invoice_line.extended_price_home * .01\r\n           END AS profitpercentcommission, \r\n           CASE wc_flat_invoice_line.extended_price_home \r\n                      WHEN 0 THEN 0 \r\n                      ELSE ( wc_flat_invoice_line.extended_price_home - ( other_cost ) ) / wc_flat_invoice_line.extended_price_home * .01\r\n           END AS profitpercentothercost,\r\n          address.phys_address1,\r\n          address.phys_city,\r\n           address.phys_postal_code,\r\n           address.phys_country, \r\n customer.class_1id\r\n, customer.class_2id\r\n, customer.class_3id\r\n, customer.class_4id\r\n, customer.class_5id\r\nFROM       wc_flat_invoice_line WITH(nolock) \r\nINNER JOIN customer WITH(nolock) \r\nON         ( \r\n                      wc_flat_invoice_line.customer_id = customer.customer_id \r\n           AND        wc_flat_invoice_line.company_no = customer.company_id ) \r\nINNER JOIN branch WITH(nolock) \r\nON         ( \r\n                      wc_flat_invoice_line.branch_id = branch.branch_id \r\n           AND        wc_flat_invoice_line.company_no = branch.company_id ) \r\nLEFT JOIN  product_group WITH(nolock) \r\nON         ( \r\n                      wc_flat_invoice_line.product_group_id = product_group.product_group_id \r\n           AND        wc_flat_invoice_line.company_no = product_group.company_id \r\n           AND        product_group.delete_flag = 'N' ) \r\nLEFT JOIN  supplier WITH(nolock) \r\nON         wc_flat_invoice_line.supplier_id = supplier.supplier_id \r\nINNER JOIN company WITH(nolock) \r\nON         wc_flat_invoice_line.company_no = company.company_id \r\nLEFT JOIN  location WITH(nolock) \r\nON         wc_flat_invoice_line.sales_location_id = location.location_id \r\nAND        wc_flat_invoice_line.company_no = location.company_id \r\nINNER JOIN address WITH(nolock) \r\nON         wc_flat_invoice_line.ship_to_id = address.id \r\nLEFT JOIN  inv_mast WITH(nolock) \r\nON         wc_flat_invoice_line.inv_mast_uid = inv_mast.inv_mast_uid \r\nLEFT JOIN  contacts WITH(nolock) \r\nON         wc_flat_invoice_line.primary_salesrep_id = contacts.id \r\nLEFT JOIN  contacts contacts_2 WITH(nolock) \r\nON         ( \r\n                      wc_flat_invoice_line.contact_id = contacts_2.id ) \r\nLEFT JOIN  corp_id WITH(nolock) \r\nON         ( \r\n                      wc_flat_invoice_line.corp_address_id = corp_id.address_id )  \r\n\r\nLEFT JOIN ship_to_salesrep with(nolock) \r\nON (wc_flat_invoice_line.ship_to_id = ship_to_salesrep.ship_to_id and wc_flat_invoice_line.company_no = ship_to_salesrep.company_id and ship_to_salesrep.primary_salesrep = 'Y' and ship_to_salesrep.delete_flag = 'N' and  @filter_by_ship_to_salesrep = 1)\r\n\r\n\r\nLEFT JOIN wc_sales_manager_x_salesrep with(nolock)\r\non ((wc_flat_invoice_line.primary_salesrep_id = wc_sales_manager_x_salesrep.salesrep_id and ':currentSalesManagerId' <> '0' and  @filter_by_ship_to_salesrep  = 0) or (ship_to_salesrep.salesrep_id = wc_sales_manager_x_salesrep.salesrep_id and ':currentSalesManagerId' <> '0' and  @filter_by_ship_to_salesrep  = 1))\r\n\r\n\r\nWHERE      (wc_flat_invoice_line.primary_salesrep_id = ':currentsalesrepid'  OR ':currentsalesrepid' = '0' )\r\nAND (wc_flat_invoice_line.product_group_id BETWEEN  @start_product_group_id  AND  @end_product_group_id ) \r\nAND (@territoryCustomer  = '0' or wc_flat_invoice_line.customer_id in (select customer_id from territory_x_customer where territory_uid in (select id from wc_list_to_tbl( @territoryCustomer))))\r\nAND ( @territoryShipTo  = '0' or wc_flat_invoice_line.ship_to_id in (select ship_to_id from territory_x_ship_to where territory_uid in (select id from wc_list_to_tbl( @territoryShipTo)) ) ) \r\nAND ( @other_charge_item = '' or inv_mast.other_charge_item = @other_charge_item ) \r\nAND (':currentsalesrepid' = '0' OR ( @filter_by_ship_to_salesrep = 0 and wc_flat_invoice_line.primary_salesrep_id = ':currentsalesrepid') or ( @filter_by_ship_to_salesrep = 1 and ship_to_salesrep.salesrep_id = ':currentsalesrepid'))\r\nAND (':currentSalesManagerId' = '0' OR wc_sales_manager_x_salesrep.sales_manager_id = ':currentSalesManagerId')\r\n\r\n",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 78,
      gdc_DataExplorerDataID: 10099,
      gdc_DataExplorerDataName: "saveSalesAnalysisReport",
      gdc_DataExplorerDataQuery:
        "If @reportID = 0 \nBEGIN\nINSERT INTO [dbo].[wc_sales_analysis_reports]\n           ([report_name]\n           ,[report_definition]\n           ,[report_desc] \n,[public_report] \n,[default_report]\n,[delete_flag]\n           ,[created_by]\n           ,[create_date]\n           ,[date_last_modified])\n     VALUES\n           (@reportName\n           ,@reportDef\n           ,@reportDesc\n,@reportDefault \n,@reportPublic\n, 'N'\n           ,':currentUserName'\n           ,GETDATE()\n           ,GETDATE() )\nEND\nELSE\nBEGIN\n\nUPDATE [dbo].[wc_sales_analysis_reports]\n   SET [report_name] = @reportName\n      ,[report_definition] = @reportDef \n      ,[report_desc] = @reportDesc \n,[public_report] = @reportPublic\n,[default_report] = @reportDefault\n      ,[created_by] = ':currentUserName' \n      ,[date_last_modified] = GETDATE()\nwhere wc_sales_analysis_report_id = @reportID\n\nEND\n\nselect *, CASE WHEN @reportID = 0 THEN SCOPE_IDENTITY() ELSE NULL END as lastInsertedID from wc_sales_analysis_reports\nwhere delete_flag = 'N'  and ( public_report = 1 or created_by = ':currentUserName') ",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 79,
      gdc_DataExplorerDataID: 10100,
      gdc_DataExplorerDataName: "deleteSalesAnalysisReport",
      gdc_DataExplorerDataQuery:
        "UPDATE wc_sales_analysis_reports\nSET delete_flag = 'Y'\nwhere [wc_sales_analysis_report_id] = @reportID\n\nselect * from wc_sales_analysis_reports \nwhere delete_flag = 'N'  and ( public_report = 1 or created_by = ':currentUserName') ",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 80,
      gdc_DataExplorerDataID: 10101,
      gdc_DataExplorerDataName: "savedReportList",
      gdc_DataExplorerDataQuery:
        "select * from wc_sales_analysis_reports \nwhere delete_flag = 'N'  and ( public_report = 1 or created_by = ':currentUserName') ",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 81,
      gdc_DataExplorerDataID: 10102,
      gdc_DataExplorerDataName: "mileageReport",
      gdc_DataExplorerDataQuery:
        "\r\nSELECT \r\n                assinged_user.name\r\n                ,cust.customer_id\r\n                ,cust.customer_name\r\n                ,p21_act.completed_by_id\r\n                ,p21_act.assigned_to_id\r\n                ,p21_Act.entry_date\r\n                           ,p21_act.completed_date\r\n                ,ct.id as contact_id\r\n                ,ct.first_name + ' ' + ct.last_name as contact_name\r\n                ,p21_act.subject\r\n                ,mileage.mileage\r\nFROM activity_trans p21_act\r\nLEFT OUTER JOIN [WebConnectDEMO].[dbo].[wc_activity_trans_ext] mileage ON p21_act.activity_trans_no =mileage.activity_trans_no\r\nLEFT OUTER JOIN contacts ct ON ct.id = p21_act.contact_id\r\nLEFT OUTER JOIN CUSTOMER cust ON cust.customer_id = ct.address_id\r\nJOIN USERS assinged_user on assinged_user.id = p21_act.assigned_to_id\r\nwhere  (p21_act.completed_flag = 'Y')",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 82,
      gdc_DataExplorerDataID: 10103,
      gdc_DataExplorerDataName: "salesAnalysisFilterData",
      gdc_DataExplorerDataQuery:
        "SELECT * FROM (\r\nSELECT DISTINCT  datename( month, dateadd( month, period, 0 ) - 1 ) + ', \r\n           ' + cast(year_for_period AS varchar(5)) AS filterValue, \r\n                Datename( month, Dateadd( month, period, 0 ) - 1 ) + ', \r\n                ' + Cast(year_for_period AS VARCHAR(5)) AS filterDesc, \r\n                'monthselector'                           filterArea ,\r\nnull as dependentFilter\r\nFROM            wc_flat_invoice_line \r\nunion all\r\nSELECT DISTINCT cast(year_for_period AS varchar(4)) AS filterValue, \r\n                cast(year_for_period AS varchar(4)) AS filterDesc, \r\n                'yearselector'                       filterArea ,\r\nnull as dependentFilter\r\nFROM            wc_flat_invoice_line  \r\nunion all\r\nSELECT DISTINCT cast(customer_id AS varchar(max)) AS filterValue, \r\n                customer_name                     AS filterDesc, \r\n                'customersearch'                   filterArea ,\r\nnull as dependentFilter\r\nFROM            customer WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(supplier_id AS varchar(max)) AS filterValue, \r\n                supplier_name                     AS filterDesc, \r\n                'suppliersearch'                   filterArea ,\r\nnull as dependentFilter\r\nFROM            supplier WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(id AS varchar(max))       AS filterValue, \r\n                first_name + ' ' + last_name AS filterDesc, \r\n                'contactsearch'                 filterArea ,\r\nnull as dependentFilter\r\nFROM            contacts WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(product_group_id AS varchar(max)) AS filterValue, \r\n                product_group_desc                     AS filterDesc, \r\n                'productgroupsearch'                    filterArea ,\r\nnull as dependentFilter\r\nFROM            product_group WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(company_id AS varchar(max)) AS filterValue, \r\n                company_name                     AS filterDesc, \r\n                'companysearch'                   filterArea ,\r\nnull as dependentFilter\r\nFROM            company WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(branch_id AS varchar(max)) AS filterValue, \r\n                branch_description              AS filterDesc, \r\n                'branchsearch'                   filterArea ,\r\nnull as dependentFilter\r\nFROM            branch WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(location_id AS varchar(max)) AS filterValue, \r\n                location_name                     AS filterDesc, \r\n                'locationsearch'                   filterArea ,\r\nnull as dependentFilter\r\nFROM            location WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(class_id AS varchar(max)) AS filterValue, \r\n                class_description              AS filterDesc, \r\n                'class1customersearch'          filterArea ,\r\nnull as dependentFilter\r\nFROM            class WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nAND             class_number = 1 \r\nAND             class_type = 'cs' \r\nunion all\r\n\r\nSELECT DISTINCT cast(class_id AS varchar(max)) AS filterValue, \r\n                class_description              AS filterDesc, \r\n                'class2customersearch'          filterArea ,\r\nnull as dependentFilter\r\nFROM            class WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nAND             class_number = 2 \r\nAND             class_type = 'cs' \r\nunion all\r\n\r\nSELECT DISTINCT cast(class_id AS varchar(max)) AS filterValue, \r\n                class_description              AS filterDesc, \r\n                'class3customersearch'          filterArea ,\r\nnull as dependentFilter\r\nFROM            class WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nAND             class_number = 3 \r\nAND             class_type = 'cs' \r\nunion all\r\nSELECT DISTINCT cast(class_id AS varchar(max)) AS filterValue, \r\n                class_description              AS filterDesc, \r\n                'class4customersearch'          filterArea ,\r\nnull as dependentFilter\r\nFROM            class WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nAND             class_number = 4 \r\nAND             class_type = 'cs' \r\nunion all\r\nSELECT DISTINCT cast(class_id AS varchar(max)) AS filterValue, \r\n                class_description              AS filterDesc, \r\n                'class5customersearch'          filterArea ,\r\nnull as dependentFilter\r\nFROM            class WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nAND             class_number = 5 \r\nAND             class_type = 'cs' \r\nunion all\r\nSELECT DISTINCT cast(ship_to_id AS varchar(max)) AS filterValue, \r\n                a.NAME                           AS filterDesc, \r\n                'shiptosearch'                    filterArea ,\r\nnull as dependentFilter\r\nFROM            ship_to WITH(nolock) \r\nJOIN            address a \r\nON              a.id = ship_to_id \r\nWHERE           a.delete_flag = 'N' \r\nAND             ship_to.delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(primary_salesrep_id AS varchar(max))        AS filterValue, \r\n                contacts.first_name + ' ' + contacts.last_name AS filterDesc, \r\n                'salesrepsearch'                                  filterArea ,\r\nnull as dependentFilter\r\nFROM            wc_flat_invoice_line \r\nLEFT JOIN       contacts WITH(nolock) \r\nON              wc_flat_invoice_line.primary_salesrep_id = contacts.id \r\nWHERE      wc_flat_invoice_line.primary_salesrep_id = ':currentsalesrepid'  OR         ':currentsalesrepid' = '0'\r\nunion all\r\nselect distinct\r\ncast(terr.territory_uid as varchar(max)) as filterValue,\r\n terr.territory_desc as filterDesc, \r\n'territoryCustomer'                                  filterArea  ,\r\nnull as dependentFilter\r\nfrom territory_x_customer txc with(nolock)  \r\njoin territory terr with(nolock)  \r\non txc.territory_uid = terr.territory_uid\r\nwhere terr.row_status_flag = 704\r\nand txc.row_status_flag = 704\r\nunion all\r\nselect distinct \r\ncast(terr.territory_uid as varchar(max)) as filterValue,\r\nterr.territory_desc as filterDesc, \r\n'territoryCustomer'                                  filterArea  ,\r\nnull as dependentFilter\r\nfrom territory_x_ship_to txc with(nolock)  \r\njoin territory terr with(nolock)  \r\non txc.territory_uid = terr.territory_uid\r\nwhere terr.row_status_flag = 704\r\nand txc.row_status_flag = 704 \r\nunion all\r\nSELECT  distinct cast(ship_to_id AS varchar(max)) AS filterValue, \r\n                a.NAME                           AS filterDesc, \r\n                'shiptosearchCustomer'                    filterArea,\r\nship_to.customer_id as dependentFilter\r\nFROM            ship_to WITH(nolock) \r\nJOIN            address a \r\nON              a.id = ship_to_id \r\nWHERE           a.delete_flag = 'N' \r\nAND             ship_to.delete_flag = 'N' \r\n\r\n\r\n\r\n) as a\r\nwhere filterArea = @filterArea\r\n \r\n",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 83,
      gdc_DataExplorerDataID: 10104,
      gdc_DataExplorerDataName: "contractPricing",
      gdc_DataExplorerDataQuery:
        "DECLARE @company_id varchar(20) SET @company_id = ':currentCompanyID' exec wc_job_price_line_get @job_price_hdr_uid,'',0,'',0,@company_id",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 84,
      gdc_DataExplorerDataID: 10105,
      gdc_DataExplorerDataName: "contractDetails",
      gdc_DataExplorerDataQuery:
        "DECLARE @company_id varchar(20) SET @company_id = '1' exec wc_job_price_line_get @job_price_hdr_uid,'',0,'',0,@company_id",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 85,
      gdc_DataExplorerDataID: 10106,
      gdc_DataExplorerDataName: "campaignReport",
      gdc_DataExplorerDataQuery:
        "select   l.lead_uid \r\n          , l.lead_name \r\n          , l.address1 \r\n          , l.address2 \r\n          , l.city \r\n          , l.state \r\n          , l.postal_code \r\n          , l.central_phone_number \r\n          , l.class_1id \r\n          , l.class_2id \r\n          , l.class_3id \r\n          , l.class_4id \r\n          , l.class_5id \r\n          , l.salesrep_id \r\n          , l.deleted \r\n          , l.date_created \r\n          , l.created_by \r\n          , l.date_last_modified \r\n          , l.last_maintained_by \r\n          , l.url \r\n          , case when cu.customer_id is null then 0 else l.customer_id end as customer_id\r\n          , l.company_id \r\n          , c.first_name as salesrep_first_name \r\n          , c.last_name as salesrep_last_name\r\n          , cu.customer_type_cd\r\n          , contact_info.contact_count \r\n          , contact_info.last_contact_create_date \r\n          , note_info.note_count \r\n          , note_info.last_note_create_date \r\n          , l.lead_source \r\n          , l.lead_type \r\n          , l.lead_status \r\n          , l.assigned_to_id \r\n          , l.next_call_date \r\n          , l.territory_uid \r\n          , territory.territory_id \r\n          , territory.territory_desc \r\n          , xr.x_entity_id as project_uid\r\n          , pr.project_name \r\n          , cu.customer_id as p21_customer_id\r\n \r\n          from wc_lead l with(nolock)\r\n          left join contacts c with(nolock) on l.salesrep_id = c.id \r\n          left join customer cu with(nolock) on (l.customer_id = cu.customer_id and l.company_id = cu.company_id and cu.delete_flag = 'N')\r\n          left join wc_sales_manager_x_salesrep sm with(nolock) on (l.salesrep_id = sm.salesrep_id and ':currentsalesmanagerrepids' <> '0')  \r\n          left join (select lead_uid\r\n                                      , count(lead_contact_uid) as contact_count\r\n                                      , max(date_created) as last_contact_create_date from wc_lead_contact with(nolock)\r\n                                      group by lead_uid) contact_info\r\n                                      on l.lead_uid = contact_info.lead_uid\r\n          left join (select lead_uid \r\n                                      , count(lead_note_uid) as note_count \r\n                                      , max(date_created) as last_note_create_date from wc_lead_notepad with(nolock)\r\n                                      group by lead_uid) note_info\r\n                                      on l.lead_uid = note_info.lead_uid \r\n          left join territory with(nolock) on l.territory_uid = territory.territory_uid \r\n \r\n          left join wc_entity_xref xr with(nolock) on (l.lead_uid = xr.entity_id and xr.entity_type = 'lead' and xr.x_entity_type = 'project' and xr.row_status_flag = 704) \r\n          left join wc_project pr with(nolock) on (convert(int, xr.x_entity_id) = pr.project_uid)\r\n ",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 86,
      gdc_DataExplorerDataID: 10107,
      gdc_DataExplorerDataName: "userConfigSettings",
      gdc_DataExplorerDataQuery:
        "select a.* from(select WConf_AttributeID as configName, \r\nWConf_UserValue_Value as configValue,\r\nWConf_SectionName as configSection ,\r\n1 as configRanking \r\nfrom gdc_WebConfig_UserValue\r\nwhere WConf_Username = ':currentUserName' or WConf_Username = 'GlobalValue'\r\nunion all\r\nselect WConf_AttributeID, \r\nWConf_AttributeDefaultValue, \r\nWConf_SectionName, \r\ncase when WConf_RoleID ='All' THEN 3 ELSE 2 END as configRanking \r\nfrom gdc_WebConfig_DefaultValues\r\nwhere WConf_RoleID ='All' or WConf_RoleID = ':currentRole'  \r\nunion all\r\nselect 'userSeesProfit' as configName, ':UserSeesProfit' as configValue, 'otherSettings', 0 as configRanking \r\n) as a\r\njoin ( select max(configRanking) as mx, configName from (select WConf_AttributeID as configName, \r\nWConf_UserValue_Value as configValue,\r\nWConf_SectionName as configSection ,\r\n1 as configRanking \r\nfrom gdc_WebConfig_UserValue\r\nwhere WConf_Username = ':currentUserName' or WConf_Username = 'GlobalValue'\r\nunion all\r\nselect WConf_AttributeID, \r\nWConf_AttributeDefaultValue, \r\nWConf_SectionName, \r\ncase when WConf_RoleID ='All' THEN 3 ELSE 2 END as configRanking \r\nfrom gdc_WebConfig_DefaultValues\r\nwhere WConf_RoleID ='All' or WConf_RoleID = ':currentRole'  \r\nunion all \r\nselect 'userSeesProfit' as configName, ':UserSeesProfit' as configValue, 'otherSettings', 0 as configRanking \r\n) as x \r\ngroup by configName ) as b\r\non a.configName = b.configName\r\nand a.configRanking = b.mx\r\n",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 87,
      gdc_DataExplorerDataID: 10108,
      gdc_DataExplorerDataName: "orderListing",
      gdc_DataExplorerDataQuery:
        "select orders_page.*\r\n, coalesce(der_required_date.required_date, '20491231') required_date\r\n, der_total_price.total_price as TotalAmount\r\n, open_amount.open_value as OpenAmount\r\n, sales_cost.total_sales_cost as SalesCost\r\n, commission_cost.total_commission_cost as CommissionCost\r\n, other_cost.total_other_cost as OtherCost\r\n, 0 as ProgressBilled\r\n, items_on_backorder \r\n, items_on_special \r\n, items_on_direct_ship\r\n, coalesce(mpo.manual_price_overide, 0) as manual_price_overide from (\r\n \r\n          select orders.* from (\r\n \r\n                   select  oe_hdr.order_no \r\n                   , oe_hdr.customer_id\r\n                   , oe_hdr.order_date \r\n                   , oe_hdr.ship2_name \r\n                   , oe_hdr.ship2_add1 \r\n                   , oe_hdr.ship2_add2 \r\n                   , oe_hdr.ship2_city \r\n                   , oe_hdr.ship2_state \r\n                   , oe_hdr.ship2_zip\r\n                   , oe_hdr.requested_date\r\n                   , oe_hdr.po_no\r\n                   , oe_hdr.terms  \r\n                   , oe_hdr.ship_to_phone  \r\n                   , COALESCE(oe_hdr.completed, 'N') completed  \r\n                   , oe_hdr.date_created  \r\n                   , oe_hdr.date_last_modified  \r\n                   , oe_hdr.last_maintained_by  \r\n                   , oe_hdr.cod_flag  \r\n                   , oe_hdr.projected_order  \r\n                   , oe_hdr.rma_flag  \r\n                   , oe_hdr.taker  \r\n                   , oe_hdr.job_name  \r\n                   , oe_hdr.approved\r\n                   , oe_hdr.delivery_instructions  \r\n                   , oe_hdr.cancel_flag  \r\n                   , oe_hdr.will_call  \r\n, oe_hdr.shipping_route_uid\r\n                   , oe_hdr.date_order_completed  \r\n                   , oe_hdr.source_id  \r\n                   , oe_hdr.gross_margin  \r\n                   , oe_hdr.profit_percent  \r\n                   , quote_hdr.complete_flag as quote_complete_flag  \r\n                   , coalesce(quote_hdr.expiration_date, convert(datetime, '20491231')) as quote_expiration_date  \r\n                   , c.customer_name As CustomerName\r\n                   , coalesce(oe_hdr.contact_id, '') contact_id \r\n                   , coalesce(cn.first_name, '') contact_first_name \r\n                   , coalesce(cn.last_name, '') contact_last_name \r\n                   , oe_hdr.source_location_id\r\n                   , oe_hdr.address_id \r\n                   , oe_hdr.job_price_hdr_uid \r\n                   , oe_hdr.carrier_id \r\n                   , car.name as carrier_name \r\n                   , oe_hdr.company_id\r\n                   , '0' as resulting_order_no\r\n                   , oe_hdr.packing_basis \r\n                   , oe_hdr.promise_date \r\n                   , oe_hdr.validation_status \r\n                   , oe_hdr.expedite_date \r\n                   , oe_hdr.location_id \r\n                   , oe_hdr.order_type \r\n                   , oe_hdr.source_code_no \r\n                   , job_price_hdr.contract_no \r\n,s.salesrep_id\r\n                   , oe_hdr.ups_code \r\n                   , oe_hdr.freight_code_uid \r\n                   , oe_hdr.freight_charge_estimate \r\n                   , oe_hdr.freight_out \r\n                   , oe_hdr.freight_out_estimate \r\n                   , freight_code.freight_cd \r\n                   , freight_code.freight_desc \r\n                  \r\n                   from oe_hdr with(nolock)\r\n                   left join contacts cn with(nolock) on oe_hdr.contact_id = cn.id  \r\n                   left join oe_hdr_salesrep s with(nolock) on (oe_hdr.order_no = s.order_number and s.primary_salesrep = 'Y' and s.delete_flag = 'N')\r\n        inner join customer c with(nolock) on (oe_hdr.customer_id = c.customer_id and oe_hdr.company_id = c.company_id)  \r\n                   left join address car with(nolock) on oe_hdr.carrier_id = car.id \r\n                   left join job_price_hdr with(nolock) on oe_hdr.job_price_hdr_uid = job_price_hdr.job_price_hdr_uid\r\n                   left join quote_hdr with(nolock) on oe_hdr.oe_hdr_uid = quote_hdr.oe_hdr_uid \r\n                   left join freight_code with(nolock) on oe_hdr.freight_code_uid = freight_code.freight_code_uid\r\n \r\n                   where (oe_hdr.delete_flag = 'N') \r\n        and (coalesce(oe_hdr.order_type, 0) NOT IN (1343))\r\n        and (oe_hdr.projected_order = @show_quotes) \r\n                   and (oe_hdr.order_date between @beginning_date and @ending_date)\r\n       and (oe_hdr.completed in ('N', 'T', @show_completed))\r\nAND (@territoryCustomer  = '' or oe_hdr.customer_id in (select customer_id from territory_x_customer where territory_uid in (select id from wc_list_to_tbl( @territoryCustomer))))\r\nAND ( @territoryShipTo  = '' or oe_hdr.address_id in (select ship_to_id from territory_x_ship_to where territory_uid in (select id from wc_list_to_tbl( @territoryShipTo)) ) ) \r\n\r\n       -- AND ((@mro = 'Y' AND oe_hdr.order_type = 1877)  OR (@mro = 'N' AND coalesce(oe_hdr.order_type, 0) <> 1877)  OR (@mro = 'B'))\r\n      and (@show_rma = '' OR oe_hdr.rma_flag = @show_rma)\r\n                  ) orders   \r\n \r\n         ) orders_page\r\n \r\nleft join ( SELECT MIN ( oe_line.required_date ) required_date\r\n                                        , oe_line.order_no\r\n                                      FROM oe_line with(nolock)\r\n                                      WHERE oe_line.complete = 'N'\r\n                                                AND oe_line.delete_flag = 'N' \r\n                                      GROUP BY oe_line.order_no\r\n                                      ) AS der_required_date ON orders_page.order_no = der_required_date.order_no\r\n \r\nleft join ( select oe_hdr.order_no, SUM( oe_line.extended_price \r\n                             + COALESCE(oe_line_service_labor.extended_price, 0)\r\n                             ) total_price \r\n                             ,SUM(CASE WHEN oe_line.disposition = 'B' THEN 1 ELSE 0 END) items_on_backorder\r\n                             ,SUM(CASE WHEN oe_line.disposition = 'S' THEN 1 ELSE 0 END) items_on_special\r\n                             ,SUM(CASE WHEN oe_line.disposition = 'D' THEN 1 ELSE 0 END) items_on_direct_ship\r\n                             from oe_hdr with(nolock) inner join oe_line with(nolock) on oe_hdr.order_no = oe_line.order_no\r\n                             left join oe_line_service with(nolock) on oe_line.oe_line_uid = oe_line_service.oe_line_uid\r\n                             left join oe_line_service_labor with(nolock) on oe_line_service.oe_line_service_uid = oe_line_service_labor.oe_line_service_uid \r\n                             inner join inv_mast with(nolock) on (inv_mast.inv_mast_uid = oe_line.inv_mast_uid AND inv_mast.product_type <> 'B') \r\n                             where (oe_line.delete_flag = 'N') \r\n                             and (oe_line.parent_oe_line_uid = 0) \r\n                             and (coalesce(oe_line.disposition, '') <> 'C')\r\n                             group by oe_hdr.order_no) as der_total_price \r\n                   on orders_page.order_no = der_total_price.order_no\r\n \r\nleft join ( select oe_hdr.order_no, SUM( \r\n                             CASE\r\n                                      WHEN oe_line.lot_bill = 'Y'\r\n                                      THEN oe_line_lot_billing.open_price\r\n                                      ELSE CASE\r\n                                                WHEN (oe_hdr.rma_flag = 'N') AND ((oe_line.qty_ordered - oe_line.qty_invoiced - oe_line.qty_canceled) <= 0)\r\n                                                THEN 0\r\n                                                ELSE ( oe_line.qty_ordered - oe_line.qty_invoiced - oe_line.qty_canceled ) * ( oe_line.unit_price / oe_line.pricing_unit_size )\r\n                                                + COALESCE(oe_line_service_labor.extended_price, 0)\r\n                                      END\r\n                             END \r\n                             ) open_value\r\n                             from oe_hdr with(nolock) inner join oe_line with(nolock) on oe_hdr.order_no = oe_line.order_no\r\n                             left join oe_line_lot_billing with(nolock) on oe_line_lot_billing.oe_line_uid = oe_line.oe_line_uid \r\n                             left join oe_line_service with(nolock) on oe_line.oe_line_uid = oe_line_service.oe_line_uid\r\n                             left join oe_line_service_labor with(nolock) on oe_line_service.oe_line_service_uid = oe_line_service_labor.oe_line_service_uid \r\n                             where (oe_line.delete_flag = 'N') \r\n                             and (oe_line.parent_oe_line_uid = 0)\r\n                             group by oe_hdr.order_no) open_amount\r\n                   on orders_page.order_no = open_amount.order_no\r\n \r\nleft join (        select oe_hdr.order_no,   0  total_sales_cost\r\n                   from oe_hdr with(nolock) inner join oe_line with(nolock) on oe_hdr.order_no = oe_line.order_no\r\n                             inner join inv_mast with(nolock) on (inv_mast.inv_mast_uid = oe_line.inv_mast_uid AND inv_mast.product_type <> 'B') \r\n                             where (oe_line.delete_flag = 'N') \r\n                             and (oe_line.parent_oe_line_uid = 0)\r\n                             group by oe_hdr.order_no) sales_cost\r\n                   on (orders_page.order_no = sales_cost.order_no)\r\n \r\nleft join (        select oe_hdr.order_no,  SUM(oe_line.commission_cost * CASE\r\n                   WHEN oe_hdr.rma_flag = 'Y'\r\n                   THEN (abs(oe_line.qty_ordered) - abs(oe_line.qty_canceled) ) * (-1)\r\n                   ELSE ( oe_line.qty_ordered - oe_line.qty_canceled )\r\n                   END / pricing_unit_size\r\n                   ) as total_commission_cost\r\n                   from oe_hdr with(nolock) inner join oe_line with(nolock) on oe_hdr.order_no = oe_line.order_no\r\n                             inner join inv_mast with(nolock) on (inv_mast.inv_mast_uid = oe_line.inv_mast_uid AND inv_mast.product_type <> 'B') \r\n                             where (oe_line.delete_flag = 'N') \r\n                             and (oe_line.parent_oe_line_uid = 0) \r\n                             group by oe_hdr.order_no) commission_cost\r\n                   on (orders_page.order_no = commission_cost.order_no)\r\n \r\nleft join (        select oe_hdr.order_no,  0  total_other_cost\r\n                   from oe_hdr with(nolock) inner join oe_line with(nolock) on oe_hdr.order_no = oe_line.order_no\r\n                             inner join inv_mast with(nolock) on (inv_mast.inv_mast_uid = oe_line.inv_mast_uid AND inv_mast.product_type <> 'B') \r\n                             where (oe_line.delete_flag = 'N') \r\n                             and (oe_line.parent_oe_line_uid = 0)\r\n                             group by oe_hdr.order_no) other_cost\r\n                   on (orders_page.order_no = other_cost.order_no)\r\n \r\nleft join (select distinct order_no, 1 as manual_price_overide from oe_line with(nolock) \r\n          where (oe_line.system_calc_unit_price <> oe_line.unit_price) \r\n    and (oe_line.manual_price_overide = 'Y') \r\n          and (oe_line.delete_flag = 'N')\r\n          and (oe_line.parent_oe_line_uid = 0) \r\n          and (oe_line.system_calc_unit_price <> 0)\r\n          ) mpo \r\n          on (orders_page.order_no = mpo.order_no)",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 88,
      gdc_DataExplorerDataID: 10109,
      gdc_DataExplorerDataName: "saveOrderListingReport",
      gdc_DataExplorerDataQuery:
        "If @reportID = 0 \r\nBEGIN\r\nINSERT INTO [dbo].[wc_order_listing_reports]\r\n           ([report_name]\r\n           ,[report_definition]\r\n           ,[report_desc] \r\n,[public_report] \r\n,[default_report]\r\n,[home_report]\r\n,[data_source]\r\n,[delete_flag]\r\n           ,[created_by]\r\n           ,[create_date]\r\n           ,[date_last_modified])\r\n     VALUES\r\n           (@reportName\r\n           ,@reportDef\r\n           ,@reportDesc\r\n,@reportDefault \r\n,@reportPublic\r\n,@reportHome\r\n,@dataSource\r\n, 'N'\r\n           ,':currentUserName'\r\n           ,GETDATE()\r\n           ,GETDATE() )\r\nEND\r\nELSE\r\nBEGIN\r\n\r\nUPDATE [dbo].[wc_order_listing_reports]\r\n   SET [report_name] = @reportName\r\n      ,[report_definition] = @reportDef \r\n      ,[report_desc] = @reportDesc \r\n,[public_report] = @reportPublic\r\n,[default_report] = @reportDefault\r\n,[home_report] = @reportHome\r\n,[data_source] = @dataSource\r\n      ,[created_by] = ':currentUserName' \r\n      ,[date_last_modified] = GETDATE()\r\nwhere wc_order_listing_report_id = @reportID\r\n\r\nEND\r\n\r\nselect *, CASE WHEN @reportID = 0 THEN SCOPE_IDENTITY() ELSE NULL END as lastInsertedID from wc_order_listing_reports\r\nwhere delete_flag = 'N'  and ( public_report = 1 or created_by = ':currentUserName') ",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 89,
      gdc_DataExplorerDataID: 10110,
      gdc_DataExplorerDataName: "deleteOrderListingReport",
      gdc_DataExplorerDataQuery:
        "UPDATE wc_order_listing_reports\r\nSET delete_flag = 'Y'\r\nwhere [wc_order_listing_report_id] = @reportID\r\n\r\nselect * from wc_order_listing_reports \r\nwhere delete_flag = 'N'  and ( public_report = 1 or created_by = ':currentUserName') ",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 90,
      gdc_DataExplorerDataID: 10111,
      gdc_DataExplorerDataName: "orderListingReportList",
      gdc_DataExplorerDataQuery:
        "select * from wc_order_listing_reports \r\nwhere delete_flag = 'N'  and ( public_report = 1 or created_by = ':currentUserName') ",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 91,
      gdc_DataExplorerDataID: 10112,
      gdc_DataExplorerDataName: "orderListingFilterData",
      gdc_DataExplorerDataQuery:
        "SELECT * FROM (\r\nSELECT DISTINCT  datename( month, dateadd( month, period, 0 ) - 1 ) + ', \r\n           ' + cast(year_for_period AS varchar(5)) AS filterValue, \r\n                Datename( month, Dateadd( month, period, 0 ) - 1 ) + ', \r\n                ' + Cast(year_for_period AS VARCHAR(5)) AS filterDesc, \r\n                'monthselector'                           filterArea ,\r\nnull as dependentFilter\r\nFROM            wc_flat_invoice_line \r\nunion all\r\nSELECT DISTINCT cast(year_for_period AS varchar(4)) AS filterValue, \r\n                cast(year_for_period AS varchar(4)) AS filterDesc, \r\n                'yearselector'                       filterArea ,\r\nnull as dependentFilter\r\nFROM            wc_flat_invoice_line  \r\nunion all\r\nSELECT DISTINCT cast(customer_id AS varchar(max)) AS filterValue, \r\n                customer_name                     AS filterDesc, \r\n                'customersearch'                   filterArea ,\r\nnull as dependentFilter\r\nFROM            customer WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(supplier_id AS varchar(max)) AS filterValue, \r\n                supplier_name                     AS filterDesc, \r\n                'suppliersearch'                   filterArea ,\r\nnull as dependentFilter\r\nFROM            supplier WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(id AS varchar(max))       AS filterValue, \r\n                first_name + ' ' + last_name AS filterDesc, \r\n                'contactsearch'                 filterArea ,\r\nnull as dependentFilter\r\nFROM            contacts WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(product_group_id AS varchar(max)) AS filterValue, \r\n                product_group_desc                     AS filterDesc, \r\n                'productgroupsearch'                    filterArea ,\r\nnull as dependentFilter\r\nFROM            product_group WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(company_id AS varchar(max)) AS filterValue, \r\n                company_name                     AS filterDesc, \r\n                'companysearch'                   filterArea ,\r\nnull as dependentFilter\r\nFROM            company WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(branch_id AS varchar(max)) AS filterValue, \r\n                branch_description              AS filterDesc, \r\n                'branchsearch'                   filterArea ,\r\nnull as dependentFilter\r\nFROM            branch WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(location_id AS varchar(max)) AS filterValue, \r\n                location_name                     AS filterDesc, \r\n                'locationsearch'                   filterArea ,\r\nnull as dependentFilter\r\nFROM            location WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(class_id AS varchar(max)) AS filterValue, \r\n                class_description              AS filterDesc, \r\n                'class1customersearch'          filterArea ,\r\nnull as dependentFilter\r\nFROM            class WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nAND             class_number = 1 \r\nAND             class_type = 'cs' \r\nunion all\r\n\r\nSELECT DISTINCT cast(class_id AS varchar(max)) AS filterValue, \r\n                class_description              AS filterDesc, \r\n                'class2customersearch'          filterArea ,\r\nnull as dependentFilter\r\nFROM            class WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nAND             class_number = 2 \r\nAND             class_type = 'cs' \r\nunion all\r\n\r\nSELECT DISTINCT cast(class_id AS varchar(max)) AS filterValue, \r\n                class_description              AS filterDesc, \r\n                'class3customersearch'          filterArea ,\r\nnull as dependentFilter\r\nFROM            class WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nAND             class_number = 3 \r\nAND             class_type = 'cs' \r\nunion all\r\nSELECT DISTINCT cast(class_id AS varchar(max)) AS filterValue, \r\n                class_description              AS filterDesc, \r\n                'class4customersearch'          filterArea ,\r\nnull as dependentFilter\r\nFROM            class WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nAND             class_number = 4 \r\nAND             class_type = 'cs' \r\nunion all\r\nSELECT DISTINCT cast(class_id AS varchar(max)) AS filterValue, \r\n                class_description              AS filterDesc, \r\n                'class5customersearch'          filterArea ,\r\nnull as dependentFilter\r\nFROM            class WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nAND             class_number = 5 \r\nAND             class_type = 'cs' \r\nunion all\r\nSELECT DISTINCT cast(ship_to_id AS varchar(max)) AS filterValue, \r\n                a.NAME                           AS filterDesc, \r\n                'shiptosearch'                    filterArea ,\r\nnull as dependentFilter\r\nFROM            ship_to WITH(nolock) \r\nJOIN            address a \r\nON              a.id = ship_to_id \r\nWHERE           a.delete_flag = 'N' \r\nAND             ship_to.delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(primary_salesrep_id AS varchar(max))        AS filterValue, \r\n                contacts.first_name + ' ' + contacts.last_name AS filterDesc, \r\n                'salesrepsearch'                                  filterArea ,\r\nnull as dependentFilter\r\nFROM            wc_flat_invoice_line \r\nLEFT JOIN       contacts WITH(nolock) \r\nON              wc_flat_invoice_line.primary_salesrep_id = contacts.id \r\nWHERE      wc_flat_invoice_line.primary_salesrep_id = ':currentsalesrepid'  OR         ':currentsalesrepid' = '0'\r\nunion all\r\nselect distinct\r\ncast(terr.territory_uid as varchar(max)) as filterValue,\r\n terr.territory_desc as filterDesc, \r\n'territoryCustomer'                                  filterArea  ,\r\nnull as dependentFilter\r\nfrom territory_x_customer txc with(nolock)  \r\njoin territory terr with(nolock)  \r\non txc.territory_uid = terr.territory_uid\r\nwhere terr.row_status_flag = 704\r\nand txc.row_status_flag = 704\r\nunion all\r\n\r\nselect distinct\r\ncast(terr.territory_uid as varchar(max)) as filterValue,\r\n terr.territory_desc as filterDesc, \r\n'territoryShipTo'                                  filterArea  ,\r\nnull as dependentFilter\r\nfrom territory_x_ship_to txs with(nolock)  \r\njoin territory terr with(nolock)  \r\non txs.territory_uid = terr.territory_uid\r\nwhere terr.row_status_flag = 704\r\nand txs.row_status_flag = 704\r\nunion all\r\n\r\nselect distinct \r\ncast(terr.territory_uid as varchar(max)) as filterValue,\r\nterr.territory_desc as filterDesc, \r\n'territoryCustomer'                                  filterArea  ,\r\nnull as dependentFilter\r\nfrom territory_x_ship_to txc with(nolock)  \r\njoin territory terr with(nolock)  \r\non txc.territory_uid = terr.territory_uid\r\nwhere terr.row_status_flag = 704\r\nand txc.row_status_flag = 704 \r\nunion all\r\n\r\nSELECT  distinct cast(shipping_route_uid AS varchar(max)) AS filterValue, \r\n                route_description                           AS filterDesc, \r\n                'shippingRoutesSearch'                    filterArea,\r\nnull as dependentFilter\r\nFROM            shipping_route WITH(nolock) \r\nWHERE           row_status_flag = 704\r\nunion all\r\n\r\nSELECT DISTINCT cast(id AS varchar(max)) AS filterValue, \r\n                name                     AS filterDesc, \r\n                'takerSearch'                   filterArea ,\r\nnull as dependentFilter\r\nFROM            users WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nunion all\r\n\r\nSELECT  distinct cast(ship_to_id AS varchar(max)) AS filterValue, \r\n                a.NAME                           AS filterDesc, \r\n                'shiptosearchCustomer'                    filterArea,\r\nship_to.customer_id as dependentFilter\r\nFROM            ship_to WITH(nolock) \r\nJOIN            address a \r\nON              a.id = ship_to_id \r\nWHERE           a.delete_flag = 'N' \r\nAND             ship_to.delete_flag = 'N' \r\n\r\n\r\n\r\n) as a\r\nwhere filterArea = @filterArea\r\n \r\n",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 92,
      gdc_DataExplorerDataID: 10113,
      gdc_DataExplorerDataName: "orderSummary",
      gdc_DataExplorerDataQuery:
        "SELECT product_group_desc, sum(qty_ordered) as item_count, sum(unit_price * qty_ordered) \r\nAS amount \r\nFROM oe_line o\r\nLEFT JOIN product_group p\r\nON o.product_group_id = p.product_group_id\r\nWHERE order_no = @order_no\r\nGROUP BY product_group_desc\r\n",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 93,
      gdc_DataExplorerDataID: 10114,
      gdc_DataExplorerDataName: "wcnFilterLead",
      gdc_DataExplorerDataQuery:
        "  SELECT\r\nlead_uid,\r\nlead_name,\r\nlead_name as filterDesc,\r\naddress1,\r\naddress2,\r\ncity,\r\nstate,\r\npostal_code,\r\ncentral_phone_number,\r\n(SELECT COUNT(DISTINCT lead_note_uid) \r\nFROM wc_lead_notepad n\r\nWHERE \r\n l.lead_uid = n.lead_uid\r\n) AS note_count,\r\n(SELECT COUNT(DISTINCT lead_contact_uid) \r\nFROM wc_lead_contact c\r\nWHERE  c.lead_uid = l.lead_uid \r\n) AS contact_count\r\n \r\nFROM wc_lead l",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 94,
      gdc_DataExplorerDataID: 10115,
      gdc_DataExplorerDataName: "wcnFilterLeadContact",
      gdc_DataExplorerDataQuery:
        " select\r\n Cast(c.lead_uid AS VARCHAR(max))     AS filterValue,\r\n  first_name + ' ' + last_name AS filterDesc,\r\nc.lead_uid,\r\nlead_name,\r\nlead_name AS address_name,\r\nfirst_name,\r\nlast_name,\r\nmi,\r\nlead_name,\r\nemail_address,\r\ncellular,\r\ndirect_phone,\r\ntitle,\r\ncentral_phone_number,\r\naddress1,\r\naddress2,\r\ncity,\r\nstate,\r\npostal_code,\r\nurl\r\n \r\nfrom wc_lead_contact  c\r\nleft join wc_lead l\r\non c.lead_uid = l.lead_uid\r\nwhere c.lead_uid = @lead_uid\r\n",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 95,
      gdc_DataExplorerDataID: 10116,
      gdc_DataExplorerDataName: "wcnNotes",
      gdc_DataExplorerDataQuery:
        "SELECT \r\ntopic as filterDesc,\r\ntopic,\r\nnote,\r\ndate_last_modified,\r\nlast_maintained_by\r\nFROM customer_notepad \r\nWHERE delete_flag='N'\r\nAND (@customer_id=0 or customer_id=@customer_id)",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 96,
      gdc_DataExplorerDataID: 10117,
      gdc_DataExplorerDataName: "wcnLeadNotes",
      gdc_DataExplorerDataQuery:
        "SELECT \r\ntopic as filterDesc,\r\ntopic,\r\nnote,\r\ndate_last_modified,\r\nlast_maintained_by\r\nFROM wc_lead_notepad \r\nWHERE deleted='false'\r\nAND (@lead_uid=0 or lead_uid=@lead_uid)",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 97,
      gdc_DataExplorerDataID: 10118,
      gdc_DataExplorerDataName: "deleteDesignProject",
      gdc_DataExplorerDataQuery:
        "UPDATE wc_neff_design_project\r\nSET delete_flag = 'Y'\r\nWHERE project_id = @projectID;\r\n\r\nSELECT *\r\nFROM wc_neff_design_project\r\nWHERE project_id = @projectID;",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 98,
      gdc_DataExplorerDataID: 10119,
      gdc_DataExplorerDataName: "wcnCustomerOpen",
      gdc_DataExplorerDataQuery:
        "\r\nSELECT \r\n(SELECT SUM(opportunity_size)\r\nFROM opportunity\r\nWHERE complete_flag = 'N'\r\nAND customer_id = @search) AS opportunityTotal,\r\n(SELECT \r\n  COUNT(*)\r\nFROM opportunity\r\nWHERE complete_flag = 'N'\r\nAND customer_id = @search) AS opportunityCount,\r\n(SELECT  COUNT(*)\r\nFROM activity_trans\r\nWHERE link_id = @search\r\nAND completed_flag ='N') AS taskCount,\r\n(SELECT COUNT(*) AS invoiceCount \r\nFROM invoice_hdr \r\nWHERE customer_id = @search \r\nAND paid_in_full_flag = 'N') AS invoiceCount,\r\n(SELECT  \r\n  SUM(total_amount)\r\nFROM invoice_hdr \r\nWHERE customer_id = @search\r\nAND paid_in_full_flag = 'N') as invoiceTotal;",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 99,
      gdc_DataExplorerDataID: 10120,
      gdc_DataExplorerDataName: "wcnContactTask",
      gdc_DataExplorerDataQuery:
        "SELECT\r\n    subject,\r\n    target_complete_date,\r\n    assigned_to_id,\r\n    comments,\r\n    activity_id\r\n  FROM task_auxiliary_contact t\r\n    JOIN activity_trans a\r\n    ON t.activity_trans_no = a.activity_trans_no\r\n  WHERE t.contact_id = @search\r\n    AND completed_flag = 'N';",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 100,
      gdc_DataExplorerDataID: 10121,
      gdc_DataExplorerDataName: "wcnContactOpportunity",
      gdc_DataExplorerDataQuery:
        "  SELECT\r\n    oc.opportunity_uid,\r\n    opportunity_name,\r\n    opportunity_size,\r\n    (SELECT contacts.first_name + ' ' + contacts.last_name\r\n    FROM contacts\r\n    WHERE contacts.id = o.salesrep_id) as salesRep,\r\n    o.customer_id,\r\n    c.customer_name,\r\n    anticipated_close_date\r\n  FROM opportunity_contact oc\r\n    JOIN opportunity o\r\n    ON oc.opportunity_uid = o.opportunity_uid\r\n    JOIN customer c\r\n    ON o.customer_id = c.customer_id\r\n  WHERE contact_id = @search",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 101,
      gdc_DataExplorerDataID: 10122,
      gdc_DataExplorerDataName: "callLogFilterData",
      gdc_DataExplorerDataQuery:
        "SELECT * FROM (\r\nSELECT DISTINCT  datename( month, dateadd( month, period, 0 ) - 1 ) + ', \r\n           ' + cast(year_for_period AS varchar(5)) AS filterValue, \r\n                Datename( month, Dateadd( month, period, 0 ) - 1 ) + ', \r\n                ' + Cast(year_for_period AS VARCHAR(5)) AS filterDesc, \r\n                'monthselector'                           filterArea ,\r\nnull as dependentFilter\r\nFROM            wc_flat_invoice_line \r\nunion all\r\nSELECT DISTINCT cast(year_for_period AS varchar(4)) AS filterValue, \r\n                cast(year_for_period AS varchar(4)) AS filterDesc, \r\n                'yearselector'                       filterArea ,\r\nnull as dependentFilter\r\nFROM            wc_flat_invoice_line  \r\nunion all\r\nSELECT DISTINCT cast(customer_id AS varchar(max)) AS filterValue, \r\n                customer_name                     AS filterDesc, \r\n                'customersearch'                   filterArea ,\r\nnull as dependentFilter\r\nFROM            customer WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(supplier_id AS varchar(max)) AS filterValue, \r\n                supplier_name                     AS filterDesc, \r\n                'suppliersearch'                   filterArea ,\r\nnull as dependentFilter\r\nFROM            supplier WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(id AS varchar(max))       AS filterValue, \r\n                first_name + ' ' + last_name AS filterDesc, \r\n                'contactsearch'                 filterArea ,\r\nnull as dependentFilter\r\nFROM            contacts WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(product_group_uid AS varchar(max)) AS filterValue, \r\n                product_group_desc                     AS filterDesc, \r\n                'productgroupsearch'                    filterArea ,\r\nnull as dependentFilter\r\nFROM            product_group WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(company_id AS varchar(max)) AS filterValue, \r\n                company_name                     AS filterDesc, \r\n                'companysearch'                   filterArea ,\r\nnull as dependentFilter\r\nFROM            company WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(branch_id AS varchar(max)) AS filterValue, \r\n                branch_description              AS filterDesc, \r\n                'branchsearch'                   filterArea ,\r\nnull as dependentFilter\r\nFROM            branch WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(location_id AS varchar(max)) AS filterValue, \r\n                location_name                     AS filterDesc, \r\n                'locationsearch'                   filterArea ,\r\nnull as dependentFilter\r\nFROM            location WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(class_id AS varchar(max)) AS filterValue, \r\n                class_description              AS filterDesc, \r\n                'class1customersearch'          filterArea ,\r\nnull as dependentFilter\r\nFROM            class WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nAND             class_number = 1 \r\nAND             class_type = 'cs' \r\nunion all\r\n\r\nSELECT DISTINCT cast(class_id AS varchar(max)) AS filterValue, \r\n                class_description              AS filterDesc, \r\n                'class2customersearch'          filterArea ,\r\nnull as dependentFilter\r\nFROM            class WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nAND             class_number = 2 \r\nAND             class_type = 'cs' \r\nunion all\r\n\r\nSELECT DISTINCT cast(class_id AS varchar(max)) AS filterValue, \r\n                class_description              AS filterDesc, \r\n                'class3customersearch'          filterArea ,\r\nnull as dependentFilter\r\nFROM            class WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nAND             class_number = 3 \r\nAND             class_type = 'cs' \r\nunion all\r\nSELECT DISTINCT cast(class_id AS varchar(max)) AS filterValue, \r\n                class_description              AS filterDesc, \r\n                'class4customersearch'          filterArea ,\r\nnull as dependentFilter\r\nFROM            class WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nAND             class_number = 4 \r\nAND             class_type = 'cs' \r\nunion all\r\nSELECT DISTINCT cast(class_id AS varchar(max)) AS filterValue, \r\n                class_description              AS filterDesc, \r\n                'class5customersearch'          filterArea ,\r\nnull as dependentFilter\r\nFROM            class WITH(nolock) \r\nWHERE           delete_flag = 'N' \r\nAND             class_number = 5 \r\nAND             class_type = 'cs' \r\nunion all\r\nSELECT DISTINCT cast(ship_to_id AS varchar(max)) AS filterValue, \r\n                a.NAME                           AS filterDesc, \r\n                'shiptosearch'                    filterArea ,\r\nnull as dependentFilter\r\nFROM            ship_to WITH(nolock) \r\nJOIN            address a \r\nON              a.id = ship_to_id \r\nWHERE           a.delete_flag = 'N' \r\nAND             ship_to.delete_flag = 'N' \r\nunion all\r\nSELECT DISTINCT cast(primary_salesrep_id AS varchar(max))        AS filterValue, \r\n                contacts.first_name + ' ' + contacts.last_name AS filterDesc, \r\n                'salesrepsearch'                                  filterArea ,\r\nnull as dependentFilter\r\nFROM            wc_flat_invoice_line \r\nLEFT JOIN       contacts WITH(nolock) \r\nON              wc_flat_invoice_line.primary_salesrep_id = contacts.id \r\nWHERE      wc_flat_invoice_line.primary_salesrep_id = ':currentsalesrepid'  OR         ':currentsalesrepid' = '0'\r\nunion all\r\nselect distinct\r\ncast(terr.territory_uid as varchar(max)) as filterValue,\r\n terr.territory_desc as filterDesc, \r\n'territoryCustomer'                                  filterArea  ,\r\nnull as dependentFilter\r\nfrom territory_x_customer txc with(nolock)  \r\njoin territory terr with(nolock)  \r\non txc.territory_uid = terr.territory_uid\r\nwhere terr.row_status_flag = 704\r\nand txc.row_status_flag = 704\r\nunion all\r\nselect distinct \r\ncast(terr.territory_uid as varchar(max)) as filterValue,\r\nterr.territory_desc as filterDesc, \r\n'territoryCustomer'                                  filterArea  ,\r\nnull as dependentFilter\r\nfrom territory_x_ship_to txc with(nolock)  \r\njoin territory terr with(nolock)  \r\non txc.territory_uid = terr.territory_uid\r\nwhere terr.row_status_flag = 704\r\nand txc.row_status_flag = 704 \r\nunion all\r\nSELECT  distinct cast(ship_to_id AS varchar(max)) AS filterValue, \r\n                a.NAME                           AS filterDesc, \r\n                'shiptosearchCustomer'                    filterArea,\r\nship_to.customer_id as dependentFilter\r\nFROM            ship_to WITH(nolock) \r\nJOIN            address a \r\nON              a.id = ship_to_id \r\nWHERE           a.delete_flag = 'N' \r\nAND             ship_to.delete_flag = 'N' \r\nUNION ALL\r\nSELECT DISTINCT cast(activity_id AS varchar(max))        AS filterValue, \r\n                activity_desc AS filterDesc, \r\n                'activitySearch'                                  filterArea ,\r\nnull as dependentFilter\r\nFROM            activity\r\nUNION ALL\r\nSELECT DISTINCT address.phys_city        AS filterValue, \r\n                address.phys_city AS filterDesc, \r\n                'customerCitySearch'                                  filterArea ,\r\nnull as dependentFilter\r\nFROM          address \r\nUNION ALL\r\nSELECT DISTINCT address.phys_state        AS filterValue, \r\n                address.phys_state AS filterDesc, \r\n                'customerStateSearch'                                  filterArea ,\r\nnull as dependentFilter\r\nFROM          address\r\nUNION ALL\r\nSELECT DISTINCT w.city        AS filterValue, \r\n                w.city AS filterDesc, \r\n                'locationCitySearch'                                  filterArea ,\r\nnull as dependentFilter\r\nFROM          wc_call_log_location w\r\nUNION ALL\r\nSELECT DISTINCT w.state        AS filterValue, \r\n                w.state AS filterDesc, \r\n                'locationStateSearch'                                  filterArea ,\r\nnull as dependentFilter\r\nFROM          wc_call_log_location w\r\nUNION ALL\r\nSELECT DISTINCT CAST(s.sales_manager_id AS VARCHAR(max)) AS filterValue,\r\n   (c.first_name + ' ' + c.last_name) AS filterDesc,\r\n  'salesManagerSearch'  filterArea,\r\n  null AS dependentFilter\r\nFROM wc_sales_manager_x_salesrep s \r\nJOIN contacts c on s.sales_manager_id = c.id\r\n\r\n) as a\r\nwhere filterArea = @filterArea\r\n \r\n",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 102,
      gdc_DataExplorerDataID: 10123,
      gdc_DataExplorerDataName: "dataSourceList",
      gdc_DataExplorerDataQuery: "select * from gdc_DataExplorerData",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 103,
      gdc_DataExplorerDataID: 10124,
      gdc_DataExplorerDataName: "createDataSource",
      gdc_DataExplorerDataQuery:
        "INSERT INTO [dbo].[gdc_DataExplorerData]\r\n           ([gdc_DataExplorerDataName]\r\n           ,[gdc_DataExplorerDataQuery]\r\n           ,[gdc_DataExplorerDataModel]\r\n           ,[gdc_DataExplorerDataExistingParameter]\r\n           ,[gdc_report_center_source])\r\n     VALUES\r\n           (@dataSourceName\r\n           ,@dataSourceQuery\r\n           ,''\r\n           ,''\r\n           ,0)",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    },
    {
      number: 104,
      gdc_DataExplorerDataID: 10125,
      gdc_DataExplorerDataName: "updateDataSource",
      gdc_DataExplorerDataQuery:
        "\r\nUPDATE [dbo].[gdc_DataExplorerData]\r\n   SET [gdc_DataExplorerDataName] = @dataSourceName\r\n      ,[gdc_DataExplorerDataQuery] = @dataSourceQuery\r\n WHERE gdc_DataExplorerDataID = @dataSourceID",
      gdc_DataExplorerDataModel: "",
      gdc_DataExplorerDataExistingParameter: false,
      gdc_report_center_source: null
    }
  ];
  //};
  
  export default data;
  