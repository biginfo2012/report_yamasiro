<table class="table table-separate table-head-custom table-checkable" id="work_report_detail_table">
    <thead>
    <tr>
        <th class="p-0 border text-center align-middle">ID</th>
        <th class="p-0 border text-center align-middle">氏名</th>
        <th class="p-0 border text-center align-middle">職責</th>
        <th class="p-0 border text-center">
            <div class="row">
                <div class="col-12 text-center pt-3">
                    <label class="mb-0 pb-2 border-bottom w-100">開始時間</label>
                </div>
            </div>
            <div class="row">
                <div class="col-4 text-center border-right pt-3 pr-0"><label>時間</label></div>
                <div class="col-8 text-center pt-3 pl-0"><label>場所</label></div>
            </div>
        </th>
        <th class="p-0 border text-center">
            <div class="row">
                <div class="col-12 text-center pt-3">
                    <label class="mb-0 pb-2 border-bottom w-100">終了時間</label>
                </div>
            </div>
            <div class="row">
                <div class="col-4 text-center border-right pt-3 pr-0"><label>時間</label></div>
                <div class="col-8 text-center pt-3 pl-0"><label>場所</label></div>
            </div>
        </th>
        <th class="p-0 border text-center align-middle">認定残業時間</th>
    </tr>
    </thead>
    <tbody>
    @foreach($data as $index => $item)
        <tr>
            <td class="p-0 border text-center align-middle">{{$index+1}}</td>
            <td class="p-0 border text-center align-middle">{{$item->user->name}}</td>
            <td class="p-0 border text-center align-middle">{{contractType($item->user->contract_type)}}</td>
            <td class="p-0 border text-center">
                <div class="row">
                    <div class="col-4 text-right border-right pt-3"><label>{{date('H:i', strtotime($item->start_time))}}</label></div>
                    <div class="col-8 text-left pt-3"><label>{{$item->start_place}}</label></div>
                </div>
            </td>
            <td class="p-0 border text-center">
                <div class="row">
                    <div class="col-4 text-right border-right pt-3"><label>{{date('H:i', strtotime($item->end_time))}}</label></div>
                    <div class="col-8 text-left pt-3"><label>{{$item->end_place}}</label></div>
                </div>
            </td>
            <td class="p-0 border text-center align-middle">{{(int)$item->over_time}}分</td>
        </tr>
    @endforeach
    </tbody>
</table>
