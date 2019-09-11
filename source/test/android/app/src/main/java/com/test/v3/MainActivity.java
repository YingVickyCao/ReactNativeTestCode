package com.test.v3;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.support.annotation.Nullable;
import android.view.KeyEvent;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;
import com.test.BuildConfig;
import com.test.R;
import com.test._native_modules.ToastPackage;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.main_view);

        findViewById(R.id.react_fragment_container);
        getFragmentManager().beginTransaction().replace(R.id.react_fragment_container, new ReactFragment(), ReactFragment.TAG).commit();
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
    }
}